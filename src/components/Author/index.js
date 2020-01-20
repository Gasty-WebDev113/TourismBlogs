import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_USER } from '../../constants/gqltags'
import {UserContainer, UsernameText, UserPhoto, UserPhotoImg} from './styles'
import  {useLikeAction} from '../../hooks/useLikeAction'
import  {useBookmarksAction} from '../../hooks/useBookmarksAction'
import {Link} from 'react-router-dom'

export const AuthorContainer = ({Author, blogid, Liked, Likes, Bookmarks}) => {
    
    const Like = useLikeAction(blogid, Liked, Likes)
    const BookMarks = useBookmarksAction(blogid, Bookmarks)

    const {data, loading, error} = useQuery(GET_USER,
        {variables: {_id: Author}})
    if(loading) return <div>Loading</div>
    const {Username, ProfilePhoto} = data.getUser
    console.log(ProfilePhoto, Author)

    return(
        <UserContainer>
            <Link to={`/user/${Username}`} style={{textDecoration: "none", color: "black"}}>
                <UsernameText>{Username}</UsernameText>
            </Link>
            <Link to={`/user/${Username}`}>
                <UserPhoto>
                    <UserPhotoImg src={ProfilePhoto ? `http://localhost:4000/images/${ProfilePhoto}`: null} alt={ProfilePhoto} /> 
                </UserPhoto>
            </Link>
            {BookMarks}
            {Like}
        </UserContainer>
    )
}