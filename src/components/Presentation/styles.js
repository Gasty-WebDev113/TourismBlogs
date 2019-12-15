import styled from "styled-components";

export const PresentImage = styled.img`
  height: 100vh;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 150px;
  position: relative;
  margin-bottom: 20vh;
  font-weight: 700;
  position: relative;

  @media (max-width: 1024px) and (min-width: 768px){
    font-size: 80px;
  }

  @media (max-width: 768px){
    font-size: 35px;
  }
  @media (max-width: 320px){
    font-size: 30px;
  }
`;
