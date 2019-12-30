import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useMutation } from '@apollo/react-hooks'
import {EDIT_USER_MUTATION} from '../../constants/gqltags'
import {EditProfileContainer, FormContainer} from './styles'

export const EditProfileComponent  = ({username, email, fullname, description}) => {
   
    const [editUser] = useMutation(EDIT_USER_MUTATION)

    const useInputValue = initialValue =>{ //Manages the values of the form to send to the mutation
        const [value, setValue] = useState(initialValue) 
        const onChange = e => setValue(e.target.value) //Takes the event and set the state with the form values

    return { value, onChange } //Returns the data and the event
    }

    const newusername = useInputValue(username)
    const newemail = useInputValue(email)
    const newfullname = useInputValue(fullname)
    const newdescription = useInputValue(description)

    const EditUser = () => {
        let input = {Username: newusername.value, Email: newemail.value, FullName: newfullname.value, Description: newdescription.value}
        editUser({variables: {input: input}})
        .then(window.location.replace("/"))
    }

    return (
        <EditProfileContainer>
            <FormContainer>
                <Modal.Dialog>
                    <Modal.Header closeButton onHide={() => window.location.reload()}>
                        <Modal.Title>Editar Datos</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={e => {e.preventDefault(); EditUser()}}>
                            <Form.Group controlId="Usernameform">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="username" defaultValue={username} onChange={newusername.onChange}/>
                            </Form.Group>

                            <Form.Group controlId="Emailform">
                                <Form.Label>Email</Form.Label>
                                <Form.Control controlId="formGridEmail" type="email" value={newemail.value} onChange={newemail.onChange}/>
                            </Form.Group>

                            <Form.Group controlId="Nameform">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" defaultValue={fullname} onChange={newfullname.onChange}/>
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Add a Description</Form.Label>
                                <Form.Control type="description" rows="3" defaultValue={description} onChange={newdescription.onChange}/>
                            </Form.Group>
                            
                            <Button variant="primary" type="submit" >
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal.Dialog>
            </FormContainer>     
        </EditProfileContainer>
    )
}