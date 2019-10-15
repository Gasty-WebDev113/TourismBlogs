import styled, {keyframes} from 'styled-components'
import img from '../../images/airport.jpg'

const fade = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`

export const Image = styled.div`
    height: 100vh;
    width: 50%;
    background-image: url(${img});
    background-position: center;
    background-size: cover;
    float: left;
    animation: ${fade} 1s ease;

    @media (max-width: 768px){
        display: none
    }
`