import React from 'react'
import {BlogPreveiw, PreviewImage, BlogTitle, Hashtag, Like, BookMarks,IconsContainer, HashtagContainer,PreviewDescription,BlogFooter } from './styles' 

export const BlogComponent = ({ userId, title, body }) =>{

return(

    <BlogPreveiw>
        <PreviewImage></PreviewImage>
        <BlogTitle to={`/blogs/${userId}`}>{title}</BlogTitle>
        <PreviewDescription>
        {body}
        </PreviewDescription>
        <IconsContainer>
            <BookMarks />
            <Like />      
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