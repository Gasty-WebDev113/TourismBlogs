import React from "react";
import { FaPlane } from "react-icons/fa";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


import {
  Logo,
  HeaderSingUp,
  MenuItems,
  HeaderContainer
} from "./styles";

export const Header = () => (
  <HeaderContainer collapseOnSelect expand="lg" >
  <Navbar.Brand href="#home"><Logo><FaPlane size='3rem' color="white"/></Logo></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <MenuItems href="#">Home</MenuItems>
      <MenuItems href="#">Blogs</MenuItems>
      <MenuItems href="#">Make a Blog</MenuItems>
    </Nav>
    
  </Navbar.Collapse>
  <HeaderSingUp variant="success">Sing Up</HeaderSingUp>
</HeaderContainer>
);
