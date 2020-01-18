import React, {Fragment} from 'react'
import {BlogsList} from '../components/BlogsList'
import {GET_BOOKMARKS} from '../constants/gqltags'
import {Loader} from '../components/Loader'
import { useQuery } from '@apollo/react-hooks';
import {NotFound} from '../components/404'

export const BookmarksPage = () => { 
    const {loading, error, data} = useQuery(GET_BOOKMARKS)

    if (loading) return <Loader/>;
    if (error) return <NotFound />
    return (
            <Fragment>
                <h1 style={{paddingTop: '15vh'}}>Your Bookmarks</h1>
                <BlogsList querydata={data.getBookmarks} />
            </Fragment>
)}


