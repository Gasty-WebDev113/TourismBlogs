import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Title, PageContainer } from './styles'
import { FormContainer } from './formstyles'

export const LoginForm = () =>(
    <PageContainer>
        <Title>READY TO KNOW THE WORLD ?</Title>

        <FormContainer>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="user" placeholder="Enter username" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Enter email" />
            </Form.Group>

            <div>In the future, I add a reCAPTCHA</div>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="You agree to sell your soul to the devil 😈" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </FormContainer>
    </PageContainer>
)