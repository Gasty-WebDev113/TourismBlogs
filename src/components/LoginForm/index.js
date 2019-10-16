import React, {useState} from 'react'
import Context from '../../Context'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Title, PageContainer, FormChanger, LoginMode, RegisterMode, ButtonMode } from './styles'
import { RegisterFormContainer, LoginFormContainer } from './formstyles'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks';

export const LoginForm = () =>{

    const [Logindisplaymode, setLoginDisplaymode] = useState(false)
    const [Registerdisplaymode, setRegisterDisplaymode] = useState(true)

    const useInputValue = initialValue =>{ //Manages the values of the form to send to the mutation
        const [value, setValue] = useState(initialValue) 
        const onChange = e => setValue(e.target.value) //Takes the event and set the state with the form values

    return { value, onChange } //Returns the data and the event
    }

    const email = useInputValue('')
    const username = useInputValue('') 
    const password = useInputValue('')

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
    
    const REGISTER_MUTATION = gql`
        mutation createUser($input: NewUser!) {
                createUser(input: $input){
    			    Username
              }
            }
    `

    const LOGIN_MUTATION = gql`
        mutation loginUser($email: String!, $password: String!) {
                loginUser(email: $email, password: $password){
    							errors
    							token
    							success
              }
            }
    `

    const [Register, {loading}] = useMutation(REGISTER_MUTATION)
    const [Login, {error}] = useMutation(LOGIN_MUTATION)

    return(
    <PageContainer>
        <Title>READY TO KNOW THE WORLD ?</Title>

        <FormChanger>
            <ButtonMode movement={Logindisplaymode}></ButtonMode>
            <RegisterMode lettercolors={Registerdisplaymode} onClick={() => ChangeToRegister()}>Register</RegisterMode>
            <LoginMode lettercolors={Logindisplaymode} onClick={() => ChangeToLogin()}>Login</LoginMode>
            
        </FormChanger>

        {/* Register Form */}
        <Context.Consumer>
            {
                ({setAuth}) => {
                    const RegisterUser = () =>{
                        let input =  {Username: username.value, Email: email.value, Password: password.value }
                        Register({ variables: { input: input } })
                        alert("Confirma tu usuario, enviamos la confirmacion a tu correo");
                        console.log(input)
                        setAuth()
                    }

                    return(
                    <RegisterFormContainer mode={mode} onSubmit={e=> {e.preventDefault(); RegisterUser()}}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="user" placeholder="Enter Username" onChange={username.onChange} value={username.value} />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email" onChange={email.onChange} value={email.value} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" onChange={password.onChange} value={password.value} />
                            <Form.Text className="text-muted">
                            Please, make you password stronger, because I don't invest in security
                            </Form.Text>
                        </Form.Group>

                        <div>In the future, I add a reCAPTCHA</div>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="You agree to sell your soul to the devil 😈" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </RegisterFormContainer>
                    )}
            }
        </Context.Consumer>

    {/* Login Form */}
        <Context.Consumer>
                {  
                ({setAuth}) => {
                    const LoginUser = () =>{
                        //This not work
                        Login({ variables: { email: email.value, password: password.value }})
                        setAuth()
                    }
                    return(
                        <LoginFormContainer mode={mode} onSubmit={e=> {e.preventDefault()}}>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={email.onChange} value={email.value} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password please" onChange={password.onChange} value={password.value} />
                        </Form.Group>

                        <div>In the future, I add a reCAPTCHA</div>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </LoginFormContainer>
                    )}
                }
            
        </Context.Consumer>
    </PageContainer>
    
    )}