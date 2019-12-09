import React from 'react';
import { BookMarks, Notifications } from '../styles'
import {UserPhotoImage} from '../components/UserPhoto'
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

export const UserLogged = () =>{
    
    const  GET_USER_INFO = gql`
                {
                getUserInfo{
                    Username
                    }
                }
        `;

    function UserImage(){
        const {loading, error, data} = useQuery(GET_USER_INFO)
        if(loading) return "Loading"
        return <UserPhotoImage {...data}/>
        
    }

    return (
    <div>
       {
           UserImage()
       }
       <Notifications />
       <BookMarks />
    </div>)
}