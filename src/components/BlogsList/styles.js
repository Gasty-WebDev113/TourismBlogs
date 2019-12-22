import styled from 'styled-components'
import Badge from 'react-bootstrap/Badge'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import {Link} from 'react-router-dom'

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    padding-top: 5vw;
    display: inline-block;
    @media (max-width: 768px){
        padding-top: 10vw;
    }
    @media (min-width: 320px) and (max-width: 767px){
        padding-top: 25vw;
    }
`
export const BlogPreveiw = styled.div`
    
    position: relative;
    height: 30vh;
    width: 60%;
    background: white;
    margin: 0 auto;
    margin-top: 3%;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.71);
    margin-bottom: 10vh;
    @media (max-width: 750px){
        width: 90%;
    }
`
export const PreviewImage = styled.img`
    position: relative;
    height: 100%;
    width: 30%;
    background: blue;
    float: left;
`
export const BlogTitle= styled(Link)`
    font-size: 2rem;
    margin-left: 5%;
    width: 90%;
    position: relative;
    color: black;
    
    &:hover{
        color: black;
    }

    @media (max-width: 750px){
        font-size: 1.5rem;
    }
`

export const PreviewDescription= styled.p`
    left: 5%;
    position: relative;
    font-size: 0.8em;
    width: 90%;
    float: bottom;
    @media (max-width: 1024px) and (min-width: 768px){
        font-size: 0.5em
    }
    @media (max-width: 750px){
        font-size: 0.5rem;
    }
   
`
export const HashtagContainer = styled.div`
    position: relative;
    display: flex;
    float: left;
    width: 50%;
    bottom: 0px;
    margin-right: 3%;
    margin-left: 3%;
    @media (max-width: 1024px) and (min-width: 768px){
        font-size: 0.5em;
        width: 30%;
    }
`

export const Hashtag = styled(Badge)`
  position: relative;
  float: left;

  top: 0px;
  margin-top: 5%;
  margin-right: 3%;
  cursor: pointer;
  @media (max-width: 768px){
    font-size: 0.5rem;
  }

`

export const BlogFooter = styled.div`
    position: absolute;
    height: 20%;
    width: 100%;
    background: whitesmoke;
    bottom: -20%;
`

export const ButtonsCointainer = styled(ButtonGroup)`
    width: 30%;
    position: relative; 
    left: 50%;
    transform: translateX(-50%);
    margin-top: 3%;
    margin-bottom: 3%;
`


