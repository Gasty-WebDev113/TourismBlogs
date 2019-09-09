import styled from "styled-components";
import Card from "react-bootstrap/Card";
import { IoIosHeartEmpty } from "react-icons/io";

export const BlogCard = styled(Card)`
  width: 15rem;
  margin: 5rem;
  background: white;
  border-radius: 10px !important;
`;

export const ImgCard = styled(Card.Img)`
  border-radius: 10px !important;
`;
export const Like = styled(IoIosHeartEmpty)`
  position: relative;
  left: 5rem;
  font-size: 30px;
`;

export const Container = styled.div`
  background: whitesmoke;
`;

export const Title = styled.h1`
  color: black;
  margin-bottom: 5%;
  position: relative;
  top: 50px;
`;
