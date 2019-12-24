import React, {Fragment} from 'react'
import { useQuery } from '@apollo/react-hooks';
import {GET_BOOKMARKS, GET_USER} from '../constants/gqltags'
import {BlogsActivityContainer, BlogsLikedDate} from '../components/UserInfo/styles'
import {BlogsListComponent} from '../components/BlogsList/blogcomponent'

import Moment from 'react-moment';

export function useLikedDate(username){
    const {data: blogdata, loading: loadingblogdata, error: errorblogdata} = useQuery(GET_BOOKMARKS)

    const {loading, error, data} = useQuery(GET_USER,{
        variables: {Username: username}
    })

    if(loading === false && loadingblogdata === false){

    const { Username, LikedBlog } = data.getUser

    const BlogLikedList = []
    blogdata.getBlogs.map(Blog => { //Get the id
        LikedBlog.map(Liked => {
            if(Liked.BlogLikedID === Blog._id){ //Match the ids
            const date = {likedate: Liked.LikedDate}
            Object.assign(Blog, date) 
            BlogLikedList.push(Blog)
        }})   
    })
    const SortedLikedList = BlogLikedList.sort((first, second)=>
        (first.likedate < second.likedate) ? 1 : -1
         //Sort the list
    )

    return (
        <BlogsActivityContainer>
                {
                    SortedLikedList.map((Blog, index) => { 
                           let now = new Date()
                            return(   
                                <Fragment key={index}>          
                                    <BlogsLikedDate>{Username} liked at {" "}
                                        {
                                        Blog.likedate < new Date(now.getTime() - (60*60*24*7*1000))
                                            ? <Moment format="YYYY-MM-DD HH">{Blog.likedate}</Moment>
                                            : <Moment fromNow>{Blog.likedate}</Moment>
                                        }
                                    </BlogsLikedDate>
                                    <BlogsListComponent {...Blog} id={index} />
                                </Fragment>)
                                })
                }        
            </BlogsActivityContainer>
    )
}} 