import React from 'react';
import { BookMarks, Notifications, Username } from '../styles'
import {UserPhotoImage} from '../components/UserPhoto'
import { useQuery } from '@apollo/react-hooks';
import {GET_USER_INFO} from '../../../constants/gqltags'

export const UserLogged = () =>{

    function UserImage(){
        const {loading, error, data} = useQuery(GET_USER_INFO)
        if(loading) return "Loading"
        return(
            <>
                <UserPhotoImage {...data}/>
                <Username>{data.getUserInfo.Username}</Username>
            </>)}

    return (
    <div>
       {
           UserImage()
       }
       <Notifications />
       <BookMarks />
    </div>)
}