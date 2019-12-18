import React from 'react'

import { useMutation, useQuery } from '@apollo/react-hooks';
import {BOOKMARKS_CHANGE, GET_BLOGS} from '../constants/gqltags'
import { BookMarks, SavedBookMarks } from '../constants/icons'
import Context from '../Context'

export function useBookmarksAction(BlogId, Bookmarks){

    const { error, data, loading: queryloading } = useQuery(GET_BLOGS);

    const [bookmarks, {loading}] = useMutation(BOOKMARKS_CHANGE, { 
        variables: { _id: BlogId },
        awaitRefetchQueries: true,
        refetchQueries: [{ query: GET_BLOGS }]
    })

   const bookmarksManager = async() =>{
    loading && queryloading === false ? console.log("Loading") : await bookmarks() 
   }

    return(
        <>
            <Context.Consumer>
                    {
                        value => {
                        if(value.Auth !== null){
                        return Bookmarks && queryloading === false ?  <SavedBookMarks onClick={bookmarksManager}/> :  <BookMarks onClick={bookmarksManager} />
                        }else{
                            return <BookMarks onClick={() => alert("Para poder hacer like necesitas estar loggeado")} />} 
                        }
                    }
            </Context.Consumer>
        </>
    )}