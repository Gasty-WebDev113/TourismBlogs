import styled from 'styled-components'

export const InfoContainer = styled.div`
    position: absolute;
    min-width: 100%;
    background: whitesmoke;
    min-height: 100%;
    padding-top: 10%;
    @media (max-width: 650px){
        padding-top: 20%;
    }
`
export const UserPhoto = styled.div`
  background: gray;
  height: 15vw;
  width: 15vw;
  border-radius: 100%;
  cursor: pointer;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 5vw;
  margin-top: 5%;
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

`;

export const UsernameTitle = styled.h1`
    position: relative;
    text-align: center;
`