import React from 'react';
import { useQuery } from '@apollo/react-hooks'
import {GET_BOOKMARKS} from '../../constants/gqltags'
import {Loader} from '../Loader'

export const BookmarksList = () => {

    const {loading, error, data} = useQuery(GET_BOOKMARKS)
    if (loading === true){return <Loader />}

    console.log(data)
    
    return(
        <div>
            hellO
        </div>
    )
} 