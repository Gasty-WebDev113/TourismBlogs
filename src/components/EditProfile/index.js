import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import {EditProfileContainer} from './styles'

export const EditProfileComponent  = ({username, email, fullname, description}) => {
    return (
        <EditProfileContainer>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Datos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="Usernameform">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" defaultValue={username}/>
                        </Form.Group>

                        <Form.Group controlId="Emailform">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" defaultValue={email} />
                        </Form.Group>

                        <Form.Group controlId="Nameform">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" defaultValue={fullname} />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Add a Description</Form.Label>
                            <Form.Control as="description" rows="3" defaultValue={description} />
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal.Dialog>     
        </EditProfileContainer>
    )
}