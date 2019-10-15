import React from "react";
import { FaPlane } from "react-icons/fa";
import { UserLogged } from './headeruserlogged'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Context from '../../Context'

import {
  Logo,
  HeaderSingUp,
  MenuItems,
  HeaderContainer,
  Link,
  NavbarIcon,
  SingUpLink
} from "./styles";

export const Header = () => (
  <HeaderContainer collapseOnSelect expand="lg" >
  <Navbar.Brand href="/"><Logo><FaPlane size='3rem' color="white"/></Logo></Navbar.Brand>
  <NavbarIcon aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <MenuItems><Link to="/">Home</Link></MenuItems>
      <MenuItems><Link to="/blogs">Blogs</Link></MenuItems>
      <MenuItems><Link to="/create">Create a Blog</Link></MenuItems>
    </Nav>
    
  <Context.Consumer>
    {
      ({Auth})=>
      Auth
      ? <UserLogged>Registered</UserLogged>
      : <HeaderSingUp variant="success"><SingUpLink to='/login'>Sing Up</SingUpLink></HeaderSingUp>
    }
  </Context.Consumer>

  </Navbar.Collapse>
  
 
</HeaderContainer>
);
