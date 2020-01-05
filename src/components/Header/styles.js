import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link as MenuLink } from 'react-router-dom'
import { MdBook } from "react-icons/md";
import { MdNotifications } from "react-icons/md";
//Yes this is an experiment

export const HeaderContainer = styled(Navbar)`
 
  background: black !important;
  width: 100%;
  text-decoration: none;
  position: fixed;
  z-index: 999;
  top: 0;
`;

export const Logo = styled.div`
  height: 100%;
  width: 10vh;
`;

export const HeaderSingUp = styled(Button)`
  position: relative;
  margin-right: 5%;
  @media (max-width: 768px){
    position: fixed;
    right: 20px;
    top: 90%;
    z-index: 999;
  }
`;
export const MenuItems = styled(Nav.Link)`
  margin: 0px 5vw 0px 5vw;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  color: gray !important;
  &:hover {
    color: #959494 !important;
    text-decoration: none;
  }
`;

export const Link = styled(MenuLink)`
  color: gray !important;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

export const SingUpLink = styled(Link)`
  color: white !important;
`

export const NavbarIcon = styled(Navbar.Toggle)`
    background: white;
` 

export const UserPhoto = styled.div`
  background: gray;
  height: 7vh;
  width: 7vh;
  border-radius: 100%;
  cursor: pointer;
  float: right;
  overflow: hidden
`;

export const UserPhotoImg = styled.img`
  image-rendering: pixelated;
  height: 100%;
`

export const UserPhotoAlternative = styled.h1`
  height: 100%;
  width: 100%;
  text-align: center;
  font-weight: bolder;
  font-size: 5.5vh;
  vertical-align: middle;
  color: white !important;
  text-decoration: none;

`;

export const Username = styled(Link)`
  font-weight: bolder;
  font-size: 4vh;
  color: white;
  right: 15vw;
  position: absolute;
  line-height: 7vh;
  color: white !important;
  @media (max-width: 425px) {
    right: 25vw;
  }
  @media (min-width: 430px) and (max-width: 768px) {
    right: 10vw;
  }
  @media (min-width: 770px) and (max-width: 1225px){
    right: 20vw;
  }
`;

export const BookMarks = styled(MdBook)`
  position: relative;
  height: 4vh;
  width: 4vh;
  color: white;
  margin-right: 1.5vw;
  margin-top: 1vh;
  cursor: pointer;
`;

export const Notifications = styled(MdNotifications)`
  position: relative;
  height: 4vh;
  width: 4vh;
  color: white;
  margin-right: 1.5vw;
  margin-top: 1vh;
  cursor: pointer;
`;