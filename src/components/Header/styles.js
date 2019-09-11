import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
//Yes this is an experiment

export const HeaderContainer = styled(Navbar)`
 
  background: black !important;
  width: 100%;
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
  color: gray !important;
  margin: 0px 5vw 0px 5vw;
  cursor: pointer;
  position: relative;

  &:hover {
    color: #959494 !important;
  }
`;
