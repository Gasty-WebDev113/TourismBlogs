import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Desert from "../../images/desert.jpg";
import NetherLands from "../../images/netherlands.jpg";
import Hawaii from "../../images/hawaii.jpg";
import { PresentImage, Title } from "./styles";
import Button from 'react-bootstrap/Button'

const Scroll = () =>{
  console.log("Funcion Activada")
  window.scrollTo({
    top: 700,
    behavior: 'smooth'
  })
}

export const Presentation = () => (
  <>
    <Carousel indicators="false" fade="true">
      <Carousel.Item>
        <PresentImage className="d-block w-100" src={Desert} alt="First slide" />
        <Carousel.Caption>
          <Title>SAHARA</Title>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Button variant="dark" onClick={() => Scroll()}>Let's Start</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <PresentImage
          className="d-block w-100"
          src={NetherLands}
          alt="Third slide"
        />

        <Carousel.Caption>
          <Title>NETHERLANDS</Title>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button variant="dark" onClick={() => Scroll()}>Let's Start</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <PresentImage className="d-block w-100" src={Hawaii} alt="Third slide" />

        <Carousel.Caption>
          <Title>HAWAII</Title>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          <Button variant="dark" onClick={() => Scroll()}>Let's Start</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </>
);
