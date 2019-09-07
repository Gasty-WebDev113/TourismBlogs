import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { FaPlane } from "react-icons/fa";

import {
  Logo,
  HeaderRow,
  HeaderSingUp,
  MenuItems,
  HeaderContainer
} from "./styles";

export const Header = () => (
  <HeaderContainer fluid="true">
    <HeaderRow>
      <Col xl="2">
        <Logo>
          <FaPlane
            color="white"
            size="3rem"
            style={{
              top: "50%",
              transform: "translate(0%, -50%)",
              position: "relative"
            }}
          />
        </Logo>
      </Col>

      <Col>
        <MenuItems>Home</MenuItems>
      </Col>
      <Col>
        <MenuItems>Blogs</MenuItems>
      </Col>
      <Col>
        <MenuItems>Make a Blog</MenuItems>
      </Col>
      <Col xl="2">
        <HeaderSingUp variant="success" md={{ span: 3, offset: 3 }}>
          Sing Up
        </HeaderSingUp>
      </Col>
    </HeaderRow>
  </HeaderContainer>
);
