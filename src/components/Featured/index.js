import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import Japan from "../../images/japan.jpg";
import { BlogCard, ImgCard, Container, Title, Like, BookMarks, Hashtag } from "./styles";

export const FeaturedBlogs = ({title, description, categories}) => (
  <Container>
    <Title>Featured Blogs</Title>
    <CardGroup>
      <BlogCard md="auto">
        <ImgCard variant="top" src={Japan} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          {
            categories.map((categorie) =>{
              return <Hashtag>#{categorie}</Hashtag>
            })
          }
          <BookMarks/>
          <Like />
        </Card.Footer>
      </BlogCard>
      
      <BlogCard md="auto">
        <ImgCard variant="top" src={Japan} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          {
            categories.map((categorie) =>{
              return <Hashtag>#{categorie}</Hashtag>
            })
          }
          <BookMarks/>
          <Like />
        </Card.Footer>
      </BlogCard>

      <BlogCard md="auto">
        <ImgCard variant="top" src={Japan} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          {
            categories.map((categorie) =>{
              return <Hashtag>#{categorie}</Hashtag>
            })
          }
          <BookMarks/>
          <Like />
        </Card.Footer>
      </BlogCard>
    </CardGroup>
  </Container>
);
