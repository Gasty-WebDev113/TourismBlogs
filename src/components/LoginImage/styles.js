import styled from 'styled-components'
import img from '../../images/airport.jpg'

export const Image = styled.div`
    height: 100vh;
    width: 50%;
    background-image: url(${img});
    background-position: center;
    background-size: cover;
    float: left;

    @media (max-width: 768px){
        display: none
    }
`