import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Nether from "../../images/netherlands2.jpg";
import { BlogCard, ImgCard, Container, Title, Like } from "./styles";

import { relative } from "path";

export const FeaturedBlogs = () => (
  <Container>
    <Title>Featured Blogs</Title>
    <CardGroup>
      <BlogCard>
        <ImgCard variant="top" src={Nether} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Like />
        </Card.Footer>
      </BlogCard>

      <BlogCard>
        <ImgCard variant="top" src={Nether} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Like />
        </Card.Footer>
      </BlogCard>

      <BlogCard>
        <ImgCard variant="top" src={Nether} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Like />
        </Card.Footer>
      </BlogCard>

      <BlogCard>
        <ImgCard variant="top" src={Nether} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Like />
        </Card.Footer>
      </BlogCard>
    </CardGroup>
    <CardGroup>
      <BlogCard>
        <ImgCard variant="top" src={Nether} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Like />
        </Card.Footer>
      </BlogCard>

      <BlogCard>
        <ImgCard variant="top" src={Nether} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Like />
        </Card.Footer>
      </BlogCard>

      <BlogCard>
        <ImgCard variant="top" src={Nether} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Like />
        </Card.Footer>
      </BlogCard>

      <BlogCard>
        <ImgCard variant="top" src={Nether} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Like />
        </Card.Footer>
      </BlogCard>
    </CardGroup>
  </Container>
);
