import React from 'react'

import { useMutation, useQuery } from '@apollo/react-hooks';
import {LIKE_QUERY, GET_BLOGS} from '../constants/gqltags'
import { LikedIcon, Like, LikeNumber } from '../constants/icons'
import Context from '../Context'

export function useLikeAction(BlogId, Liked, Likes){

    const { error, data, loading: queryloading } = useQuery(GET_BLOGS);

    const [addLike, {loading}] = useMutation(LIKE_QUERY, { //ALELUYA ESTA MIERDA FUNCIONA !!!!! / ALELUYA THIS SHIT WORKS!!!!!!
        variables: { _id: BlogId },
        awaitRefetchQueries: true,
        refetchQueries: [{ query: GET_BLOGS }]
    })

   const Liker = async() =>{
    loading ? console.log("Loading") : await addLike() 
   }

    return(
        <>
            <Context.Consumer>
                    {
                        value => {
                        if(value.Auth !== null){
                        return Liked && queryloading === false ?  <LikedIcon onClick={Liker}/> :  <Like onClick={Liker} />
                        }else{
                            return <Like onClick={() => alert("Para poder hacer like necesitas estar loggeado")} />} 
                        }
                    }
            </Context.Consumer>
            <LikeNumber>{Likes}</LikeNumber>
        </>
    )}
    
