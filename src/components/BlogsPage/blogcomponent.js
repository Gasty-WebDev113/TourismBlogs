import React from 'react'
import {BlogPreveiw, PreviewImage, BlogTitle, Hashtag, HashtagContainer,PreviewDescription,BlogFooter } from './styles' 
import { IconsContainer, BookMarks, SavedBookMarks, Like, LikeNumber } from './iconsstyles'

export const BlogComponent = ({ _id, Title, Photo, Likes, Bookmarks, Content }) =>{

return(

    <BlogPreveiw>
        <PreviewImage></PreviewImage>
        <BlogTitle to={`/blogs/${_id}`}>{Title}</BlogTitle>
        <PreviewDescription>
        {Content}
        </PreviewDescription>
        <IconsContainer>
            { Bookmarks ? <BookMarks /> : <SavedBookMarks />}
            <Like/>   
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