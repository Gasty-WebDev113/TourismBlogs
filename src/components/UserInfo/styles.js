import styled from 'styled-components'
import { TiPencil } from "react-icons/ti";

export const InfoContainer = styled.div`
    position: absolute;
    min-width: 100%;
    background: whitesmoke;
    min-height: 100%;
    padding-top: 8%;
    @media (max-width: 650px){
        padding-top: 20%;
    }
    
`
export const UserInfoContainer = styled.div`
  position: fixed;
  width: 40%;
  background: -webkit-linear-gradient(top, rgba(158,158,158,1) 0%, rgba(245,245,245,1) 100%);
  min-height: 70%;
  margin-left: 5vw;
  @media (max-width: 768px){
    margin-top: 5vh;
    }
  z-index: 1
`

export const UserPhoto = styled.div`
  background: ${props => `url(${props.photo}) no-repeat center`};
  background-size: cover;
  height: 15vw;
  width: 15vw;
  border-radius: 100%;
  cursor: pointer;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 5vh;
  overflow: hidden;

  @media (min-width: 770px){
    margin-top: 0;
    }
`;

export const UserPhotoAlternative = styled.h1`
  height: 100%;
  width: 100%;
  text-align: center;
  font-weight: bolder;
  font-size: 10vw;
  vertical-align: middle;
  color: white !important;
  text-decoration: none;
  margin-top: 5vh;
`;

export const TitleContainer = styled.div`
  margin: 0 auto;
  width: 70%;
  
`

export const Title = styled.h1`
  position: relative;
  text-align: center;
  font-size: 1.5vw;
  cursor: default;
  word-break: break-word;

  @media (max-width: 1225px){
    font-size: 2vw;
    }
  @media (max-width: 426px){
    font-size: 4vw;
    }
`
export const Edit = styled(TiPencil)`
  position:relative;
  cursor: pointer;
  height: 5vh;
  width: 5vw;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 20px;
  margin-bottom: 20px;
  &:hover{
   fill: blue
  }
  
`

export const DescriptionTextContainer = styled.div`
  position: relative;
  text-align: center;
  display: block;
  word-break: break-word;

  @media (max-width: 1225px){
    font-size: 2vw;
    }
  @media (max-width: 426px){
    font-size: 3vw;
    }
`

export const BlogsLikedDate = styled.p`
  text-align: center;
`

export const BlogsActivityContainer = styled.div`
    position:relative;
    height: 100%;
    width: 60%;
    float: right;
    margin-top: 8vh;

    @media (max-width: 768px){
      width: 100%;
    }
`

