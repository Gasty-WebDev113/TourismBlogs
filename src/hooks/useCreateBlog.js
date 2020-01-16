import React,{useState, useEffect} from 'react';
import { useMutation } from '@apollo/react-hooks'
import { useDropzone } from 'react-dropzone';
import {CREATE_BLOG} from '../constants/gqltags'
import {FileviewContainer, FileList, FileInner, FilePreview } from '../constants/imagedropzone'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

export const useCreateBlog = () => {
        const useInputValue = initialValue =>{ //Manages the values of the form to send to the mutation
          const [value, setValue] = useState(initialValue) 
          const onChange = e => setValue(e.target.value) //Takes the event and set the state with the form values

        return { value, onChange } //Returns the data and the event
        }
        const title = useInputValue('')
        const content = useInputValue('') 

        const [createBlog, {loading}] = useMutation(CREATE_BLOG)
        console.log(loading)
        const [files, setFiles] = useState([]);
        const {getRootProps, getInputProps} = useDropzone({
          accept: 'image/*',
          onDrop: async acceptedFiles => {
            //Send the images to the state
            await setFiles(acceptedFiles.map(file => Object.assign(file, {
              preview: URL.createObjectURL(file)
            })));
          }
        });
        
        const fileview = files.map(file => (
          <FileList key={file.name}>
            <FileInner>
              <FilePreview src={file.preview}/>
            </FileInner>
          </FileList>
        ));
      
        useEffect(() => () => {
          //Refresh the files and return the view
          files.forEach(file => URL.revokeObjectURL(file.preview));
        }, [files]);

        
        const CreateBlog = async() =>{
          let input = {Title: title.value, Content: content.value }
          console.log(loading)
          createBlog({variables: {input: input, files: files}})
        }

        return (
        <Form onSubmit={e => {e.preventDefault(); CreateBlog()}}>
            <h1>Create a blog</h1>
            <br />
            <Form.Control size="lg" type="text" placeholder="Title" value={title.value} onChange={title.onChange} disabled={loading} />
            <br />
            <Form.Control as="textarea" rows="10" required value={content.value} onChange={content.onChange} disabled={loading}/>
            <br />
            <section className="container">
                <div {...getRootProps({className: 'dropzone'})}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop the images to make your blog happier 😄</p>
                </div>
                <FileviewContainer>
                    {fileview}
                </FileviewContainer>
            </section>
            <Button variant="primary" type="submit" disabled={loading}>
                Submit
            </Button>
            <Alert variant="success" show={loading}>
              Blog Submitted
            </Alert>
        </Form>
        );
      }