import React from "react";

import { Header } from "../components/Header";
import { Presentation } from "../components/Presentation";
import { FeaturedBlogs } from "../components/Featured"

let Featuredtitle = "-> Put fetch data here <-"
let Featuredesc = "Yes i haven't a description, in the future I deploy a GraphQl, Node, Express Server to fetch this data"
let Blogcategories = ["Japan", "Akihabara", "Culture"]

class Home extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Presentation />
        <FeaturedBlogs title={Featuredtitle} description={Featuredesc} categories={Blogcategories}/>
      </div>
    );
  }
}

export default Home;
