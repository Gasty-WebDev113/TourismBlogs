import React from 'react';
import { UserPhoto, UserPhotoAlternative} from '../styles'

export const UserPhotoImage = (data) =>{
    const name = data.getUserInfo.Username.slice(0,1).toUpperCase()
    console.log(name)
    
    return (<UserPhoto>
            <UserPhotoAlternative style={{color: "white"}}>{name}</UserPhotoAlternative>
    </UserPhoto>)
}