import React from 'react'
import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/react-hooks';

import {BlogPreveiw, PreviewImage, BlogTitle, Hashtag, HashtagContainer,PreviewDescription,BlogFooter } from './styles' 
import { IconsContainer, BookMarks, SavedBookMarks, Like, LikeNumber } from './iconsstyles'

export const BlogComponent = ({ _id, Title, Photo, Likes, Bookmarks, Content }) =>{

    const BlogId = _id

    const LIKE_QUERY = gql`
        mutation addLike($_id: ID!) {
                addLike(_id: $_id){
                    Likes
                }
            }
    `

    const  GET_BLOGS = gql`
            {
            getBlogs{
                _id
                Title
                Photo
                Likes
                Bookmarks
                Content
                    }
            }
    `;
    const { loading, error, data } = useQuery(GET_BLOGS, 
        {variables: { _id: BlogId }}  
        );

    const [addLike] = useMutation(LIKE_QUERY, { //ALELUYA ESTA MIERDA FUNCIONA !!!!! / ALELUYA THIS SHIT WORKS!!!!!!
        variables: { _id: BlogId },
        awaitRefetchQueries: true,
        refetchQueries: [{ query: GET_BLOGS }]
    })
    
    

    function AddLike(){
        addLike()
        console.log(data)
    }

return(

    <BlogPreveiw>
        <PreviewImage></PreviewImage>
        <BlogTitle to={`/blogs/${_id}`}>{Title}</BlogTitle>
        <PreviewDescription>
        {Content}
        </PreviewDescription>
        <IconsContainer >
            { Bookmarks ? <BookMarks /> : <SavedBookMarks />}
            <Like onClick={() => AddLike()} />   
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