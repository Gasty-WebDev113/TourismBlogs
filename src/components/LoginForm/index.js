import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Title, PageContainer, FormChanger, LoginMode, RegisterMode, ButtonMode } from './styles'
import { RegisterFormContainer, LoginFormContainer } from './formstyles'


export const LoginForm = () =>{

    const [Logindisplaymode, setLoginDisplaymode] = useState(false)
    const [Registerdisplaymode, setRegisterDisplaymode] = useState(true)

    const mode = {
        Login: Logindisplaymode,
        Register: Registerdisplaymode
    }

    const ChangeToLogin = () =>{
        setLoginDisplaymode(true)
        setRegisterDisplaymode(false)
    }

    const ChangeToRegister = () =>{
        setLoginDisplaymode(false)
        setRegisterDisplaymode(true)
    }

    return(
    <PageContainer>
        <Title>READY TO KNOW THE WORLD ?</Title>

        <FormChanger>
            <ButtonMode movement={Logindisplaymode}></ButtonMode>
            <RegisterMode lettercolors={Registerdisplaymode} onClick={() => ChangeToRegister()}>Register</RegisterMode>
            <LoginMode lettercolors={Logindisplaymode} onClick={() => ChangeToLogin()}>Login</LoginMode>
            
        </FormChanger>

        {/* Register Form */}

        <RegisterFormContainer mode={mode}>
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
        </RegisterFormContainer>

    {/* Login Form */}

        <LoginFormContainer mode={mode}>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter email" />
            </Form.Group>

            <div>In the future, I add a reCAPTCHA</div>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </LoginFormContainer>
    </PageContainer>
    )}