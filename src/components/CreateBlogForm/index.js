import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {CreateBlogFormContainer} from './styles'

export const CreateBlogForm = () =>{
    return(
        <CreateBlogFormContainer>
            <Form>
                <h1>Create a blog</h1>
                <br />
                <Form.Control size="lg" type="text" placeholder="Title" />
                <br />
                <Form.Control as="textarea" rows="10" required />
                <br />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </CreateBlogFormContainer>
    )
}