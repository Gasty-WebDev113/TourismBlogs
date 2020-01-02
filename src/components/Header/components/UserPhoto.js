import React from 'react';
import { UserPhoto, UserPhotoAlternative, UserPhotoImg} from '../styles'

export const UserPhotoImage = (data) =>{
    const name = data.getUserInfo.Username.slice(0,1).toUpperCase()
    
    return (<UserPhoto>
                {
                  data.getUserInfo.ProfilePhoto !== ''
                ? <UserPhotoImg src={`http://localhost:4000/images/${data.getUserInfo.ProfilePhoto}`} alt="profile" /> 
                : <UserPhotoAlternative>{name}</UserPhotoAlternative> 
                }
    </UserPhoto>)
}