import React from 'react';
import { BlogDetailContainer } from './styles'

//This recives the id and the component make a graphql query and get a full information for the blog

export const BlogDetail = ({blogid}) =>(
    <BlogDetailContainer>
        <h1> {blogid} </h1>
    </BlogDetailContainer>
    
)
