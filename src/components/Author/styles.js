import styled from "styled-components";


export const UserContainer = styled.div`
    left: 0;
    background: whitesmoke;
    position: fixed;
    display: inline-block;
    z-index: 1;
    top: 20vh;
    margin-left: 5%;
`

export const UsernameText = styled.p`
    font-weight: bold
`

export const UserPhoto = styled.div`
  background: gray;
  height: 7vh;
  width: 7vh;
  border-radius: 100%;
  cursor: pointer;
  float: right;
  overflow: hidden;
  margin-left: 3vw;
  position: relative;
  top: -5vh;
`;

export const UserPhotoImg = styled.img`
  height: 100%;
`