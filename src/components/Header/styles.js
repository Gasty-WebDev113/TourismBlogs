import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

//Yes this is an experiment

export const HeaderContainer = styled(Container)`
  margin-right: 0;
  margin-left: 0;
  background: black;
  width: 100%;
`;

export const Logo = styled.div`
  height: 100%;
  width: 10vh;
`;

export const HeaderRow = styled(Row)`
  height: 10vh;
`;

export const HeaderSingUp = styled(Button)`
  position: relative;
  top: 50%;
  transform: translate(0%, -50%);
`;
export const MenuItems = styled.div`
  color: #cac9c9;
  position: relative;
  top: 50%;
  transform: translate(0%, -50%);
  cursor: pointer;

  &:hover {
    color: #949494;
  }
`;
