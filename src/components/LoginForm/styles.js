import styled, {keyframes}  from 'styled-components'

export const PageContainer = styled.div`
    float: right;
    height: 100vh;
    width: 50%;
    @media (max-width: 768px){
        width: 100%;
    }
`

export const Title = styled.h1`
    position:relative;
    margin-top: 15%;
    text-align: center;
    font-weight: bold;
    @media (max-width: 768px){
        margin-top: 25%;
    }
`

export const FormChanger = styled.div`
    width: 30%;
    height: 5vh;
    margin: 0 auto;
    margin-top: 3vh;
    margin-bottom: 3vh;
    @media (max-width: 768px){
        width: 50%;
    }
`

export const RegisterMode = styled.div`
    position: relative;
    width: 45%;
    height: 5vh;
    float: left;
    text-align: center;
    line-height: 5vh;
    
    /*Sorry, I could't solve in another shape*/

    color: ${props => props.lettercolors ? 'white' : 'orange' };
    cursor: pointer;
    z-index: 999;

    @media (max-width: 768px){
        font-weight: 2vw
    }
`

export const LoginMode = styled(RegisterMode)`
    float: right;
`

export const ButtonMode = styled.div`
    position: absolute;
    width: 7vw;
    height: 5vh;
    background: blue;
    border-radius: 28px;
    transform: translateX(${props => props.movement ? '8vw' : '0vw' });
    transition-duration: 0.25s;

    @media (max-width: 768px){
        width: 25vw;
        transform: translateX(${props => props.movement ? '25vw' : '0vw' });
    }
`