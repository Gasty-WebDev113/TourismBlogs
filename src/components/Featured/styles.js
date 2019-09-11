import styled from "styled-components";
import Card from "react-bootstrap/Card";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdBookmarkBorder } from "react-icons/md"; 
import Badge from 'react-bootstrap/Badge'

export const BlogCard = styled(Card)`
  width: 15rem;
  margin: 5rem;
  background: white;
  border-radius: 10px !important;

  @media (max-width: 768px){
    width: 20rem;
    margin: 0 auto;
    display: inline-flex;
  }
  @media (max-width: 1024px) and (min-width: 768px){
    width: 10rem;
    margin: 20px ;
    display: flex;
  }

`;

export const ImgCard = styled(Card.Img)`
  border-radius: 10px !important;
`;

export const Hashtag = styled(Badge)`
  position: relative;
  float: left;
  top: 50%;
  transform: translateY(-50%);
  margin-right: 3%;
  @media (max-width: 768px){
    font-size: 0.5rem;
  }
`

export const Like = styled(IoIosHeartEmpty)`
  position: relative;
  margin-right: 5%;
  font-size: 30px;
  float: right;
`;

export const BookMarks = styled(MdBookmarkBorder)`
  position: relative;
  float: right;
  font-size: 30px;
`;

export const Container = styled.div`
  background: whitesmoke;
`;

export const Title = styled.h1`
  color: black;
  margin-bottom: 5%;
  position: relative;
  top: 40px;

  @media (max-width: 768px){
    top: 10px;
    font-size: 25px;
    margin-bottom: 30px;
  }
`;
