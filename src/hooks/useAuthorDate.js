import React, {Fragment} from 'react'
import { useQuery } from '@apollo/react-hooks';
import {GET_BLOGS, GET_USER} from '../constants/gqltags'
import {BlogsActivityContainer} from '../components/UserInfo/styles'
import {BlogsListComponent} from '../components/BlogsList/blogcomponent'

export function useAuthorDate(username){
    const {data: blogdata, loading: loadingblogdata, error: errorblogdata} = useQuery(GET_BLOGS)

    const {loading, error, data} = useQuery(GET_USER,{
        variables: {Username: username}
    })
    if(loading === false && loadingblogdata === false){
    const { _id } = data.getUser

    return (
        <BlogsActivityContainer>
            {
                blogdata.getBlogs.map(Blog => { //Get the Author id
                    if(Blog.Author === _id){ //Match the ids and push
                        return(   
                            <Fragment>             
                                <BlogsListComponent {...Blog} />
                            </Fragment>)
                    }})
            }        
        </BlogsActivityContainer>
    )}} 