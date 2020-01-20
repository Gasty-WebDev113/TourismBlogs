import React from 'react';
import { BlogDetailContainer, BlogTitle, BlogText, BlogImage } from './styles'
import {Loader} from '../Loader'
import { useQuery } from '@apollo/react-hooks'
import {GET_BLOG} from '../../constants/gqltags'
import {LikeandBookmarks} from './iconcontainer'

export const BlogDetail = ({blogid}) =>{

    const {loading, error, data} = useQuery(GET_BLOG, {
        variables: {_id: blogid}
    })
    if (loading) return <Loader/>  
    const {_id, Liked, Likes, Bookmarks} = data.getBlog

    return(
    <BlogDetailContainer>
        <LikeandBookmarks _id={_id} Liked={Liked} Likes={Likes} Bookmarks={Bookmarks} /> 
        <BlogTitle> {data.getBlog.Title} </BlogTitle>
        <BlogImage src={data.getBlog.Photos ? `http://localhost:4000/images/${data.getBlog.Photos[0]}`: null} alt={data.getBlog.Photos[0]} />
        <BlogText> {data.getBlog.Content} </BlogText>
    </BlogDetailContainer>
    )
    };
