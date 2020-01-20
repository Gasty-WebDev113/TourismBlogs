import styled from 'styled-components'

export const BlogDetailContainer = styled.div`
    position: absolute;
    min-width: 60%;
    background: whitesmoke;
    min-height: 100%;
    padding-top: 10%;
    left: 50%;
    transform: translateX(-50%);
    @media (max-width: 650px){
        padding-top: 20%;
    }
`

export const BlogTitle = styled.h1`
    position: relative;
    text-align: center;
    margin-bottom: 5vh;
`

export const BlogText = styled.h1`
    position: relative;
    text-align: center;
    margin-bottom: 5vh;
`

export const BlogImage = styled.img`
    position: relative;
    height: 50%;
    width: 100%;
    float: left;
    margin-bottom: 5vh;
`