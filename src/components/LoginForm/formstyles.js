import styled, {keyframes} from 'styled-components'

const Opacity = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`

export const RegisterFormContainer = styled.form`
    width: 70%;
    position: relative;
    margin: 0 auto;
    margin-top: 5%;
    display: ${props => props.mode.Register ? 'block' : 'none' };
    animation: ${Opacity} 1s ease
`

export const LoginFormContainer = styled.form`
    width: 70%;
    position: relative;
    margin: 0 auto;
    margin-top: 5%;
    display: ${props => props.mode.Login ? 'block' : 'none' };
    animation: ${Opacity} 1s ease
`