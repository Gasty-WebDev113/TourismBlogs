import React  from 'react';
import Button from 'react-bootstrap/Button'
import { Container, ButtonsCointainer } from './styles'
import { BlogComponent } from './blogcomponent'
import { Loader } from '../Loader'
import  NotFound  from '../404/index'
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

export const BlogsPage = () =>{

    const  GET_BLOGS = gql`
            {
            getBlogs{
                _id
                Title
                Photo
                Likes
                Bookmarks
                Content
                Liked
                    }
            }
    `;

    function Blogs(){
        const { loading, error, data } = useQuery(GET_BLOGS);
        if (loading) return <Loader/>;
        if (error) return <NotFound/>;

        return (
            
            data.getBlogs.map(Blog => (
                <BlogComponent {...Blog} />
            ))
        )

    }

    return(
        <Container >
            {   
                Blogs()
            } 
        </Container>
    )
}
