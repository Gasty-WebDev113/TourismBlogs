import React from "react";
import { FaPlane } from "react-icons/fa";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import {
  Logo,
  HeaderSingUp,
  MenuItems,
  HeaderContainer,
  Link,
  NavbarIcon
} from "./styles";

export const Header = () => (
  <HeaderContainer collapseOnSelect expand="lg" >
  <Navbar.Brand href="#home"><Logo><FaPlane size='3rem' color="white"/></Logo></Navbar.Brand>
  <NavbarIcon aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <MenuItems><Link to="/">Home</Link></MenuItems>
      <MenuItems><Link to="/blogs">Blogs</Link></MenuItems>
      <MenuItems><Link to="/create">Create a Blog</Link></MenuItems>
    </Nav>
    
  </Navbar.Collapse>
  <HeaderSingUp variant="success">Sing Up</HeaderSingUp>
</HeaderContainer>
);
