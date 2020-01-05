import React from 'react';
import { BookMarks, Notifications, Username } from '../styles'
import {UserPhotoImage} from '../components/UserPhoto'
import { useQuery } from '@apollo/react-hooks';
import {GET_USER_INFO} from '../../../constants/gqltags'
import {Link} from 'react-router-dom'

export const UserLogged = () =>{

    function UserImage(){
        const {loading, error, data} = useQuery(GET_USER_INFO)
        if(loading) return "Loading"
        const userprofile = data.getUserInfo.Username
        
        return(
            <>
                <Link to={`/user/${userprofile}`} ><UserPhotoImage {...data} /></Link>
                <Username to={`/user/${userprofile}`}>{data.getUserInfo.Username}</Username>
            </>)}

    return (
    <div>
       {
           UserImage()
       }
       <Notifications />
       <Link to='/bookmarks'>
            <BookMarks />
       </Link>
    </div>)
}