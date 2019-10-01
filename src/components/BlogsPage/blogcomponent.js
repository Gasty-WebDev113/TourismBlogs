import React from 'react'
import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/react-hooks';

import {BlogPreveiw, PreviewImage, BlogTitle, Hashtag, HashtagContainer,PreviewDescription,BlogFooter } from './styles' 
import { IconsContainer, BookMarks, SavedBookMarks, Like, LikeNumber } from './iconsstyles'

export const BlogComponent = ({ _id, Title, Photo, Likes, Bookmarks, Content }) =>{

    const BlogId = _id

    const  GET_BLOGS = gql`
            query
            getBlogs{
                _id
                Title
                Photo
                Likes
                Bookmarks
                Content
                    }
            
    `;

    const LIKE_QUERY = gql`
        mutation addLike($_id: ID!) {
                addLike(_id: $_id){
                    Likes
                }
            }
    `
    const { loading , data } = useQuery(GET_BLOGS);
    const [addLike, { error }] = useMutation(LIKE_QUERY, {
        variables: { _id: BlogId }, refetchQueries: [GET_BLOGS]
    })

    

return(

    <BlogPreveiw>
        <PreviewImage></PreviewImage>
        <BlogTitle to={`/blogs/${_id}`}>{Title}</BlogTitle>
        <PreviewDescription>
        {Content}
        </PreviewDescription>
        <IconsContainer >
            { Bookmarks ? <BookMarks /> : <SavedBookMarks />}
            <Like onClick={() => addLike()} />   
            <LikeNumber>{Likes}</LikeNumber>
        </IconsContainer>
                    
        <BlogFooter>
            <HashtagContainer>
                <Hashtag>$HELLO</Hashtag>
                <Hashtag>$HELLO</Hashtag>
                <Hashtag>$HELLO</Hashtag>
                <Hashtag>$HELLO</Hashtag>
            </HashtagContainer>
        </BlogFooter>
    </BlogPreveiw>
)
}