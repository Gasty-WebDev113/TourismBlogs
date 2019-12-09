import styled from 'styled-components'
import Button from 'react-bootstrap/Button'

export const Container = styled.div`
    position:relative;
    width: 50vw;
    height: 100%;
    float: right;
    margin-right: 5%;

`

export const SecondContainer = styled(Container)`
    float: left;
    position: absolute; 
    width: 50vw; 
`

export const AnimationContainer = styled.div`
    height: 100%;
    width: 40vw;
    right: 0;
    margin-top: 5%;
`


export const SecondAnimationContainer = styled(AnimationContainer)`
    float: none;
    position: relative;
    left: 55%;
    padding-bottom: 5vh;
    margin-top: 0%;
`

export const Title = styled.h1`
    text-align: center;
    font-size: 3vw;
    margin-top: 2vh;
    margin-bottom: 4vh;
    position: relative;
    left: 0px;
    @media (max-width: 450px){
        margin-top: 1vw;
        margin-bottom: 2vw;
    }
`

export const Text = styled.p`
    position: relative;
    text-align: center;
    right: 0px;
    @media (max-width: 825px){
        display:none
    }
    @media (min-width: 825px){
        font-size: 1.5vw
    }
`

export const TryButton = styled(Button)`
    left: 50% !important;
    transform: translate(-50%, 0%) !important;
    position: absolute !important;
    margin-top: 2vh;
    @media (max-width: 450px){
        font-size: 4vw
    }
`