import React, {Fragment} from "react";

import { Presentation } from "../components/Presentation";
import { FeaturedBlogs } from "../components/Featured"

let BookmarksSectionTitle = "Your BookMarks"
let TrendTitle = "Trend Now"
let FeaturedSectionTitle = "Featured Blogs"
let Featuredtitle = "-> Put fetch data here <-"
let Featuredesc = "Yes i haven't a description, in the future I deploy a GraphQl, Node, Express Server to fetch this data"
let Blogcategories = ["Japan", "Akihabara", "Culture"]

class Home extends React.Component {

  render() {
    return (
      <Fragment>
        <Presentation />
        <FeaturedBlogs titlecard={Featuredtitle} description={Featuredesc} categories={Blogcategories} titleofsection={FeaturedSectionTitle}/>
        <FeaturedBlogs titlecard={Featuredtitle} description={Featuredesc} categories={Blogcategories} titleofsection={BookmarksSectionTitle} />
        <FeaturedBlogs titlecard={Featuredtitle} description={Featuredesc} categories={Blogcategories} titleofsection={TrendTitle} />
      </Fragment>
    );
  }
}

export default Home;
