import React from 'react'
import {BlogsList} from '../components/BlogsList'
import {GET_BLOGS} from '../constants/gqltags'
import { useQuery } from '@apollo/react-hooks';
import { Loader } from '../components/Loader'
import {NotFound} from '../components/404'

export const Blogs = () => { 
    const {loading, error, data} = useQuery(GET_BLOGS)

    if (loading) return <Loader/>;
    //if (error) return <NotFound />

    return (
            <div style={{background: "whitesmoke"}}>
                <BlogsList querydata={data.getBlogs} />
            </div>
    )}

