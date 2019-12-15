import React from 'react'
import {InfoContainer, UsernameTitle, UserPhoto, UserPhotoAlternative} from './styles'
import { useQuery } from '@apollo/react-hooks';
import {GET_USER} from '../../constants/gqltags'
import {Loader} from '../Loader'

export const UserInfo = ({username}) => {

    const {loading, error, data} = useQuery(GET_USER,{
        variables: {Username: username}
    })
    
    console.log(loading)

    if(loading === false){
    const { Username, Email, FullName } = data.getUser
    return(
        <InfoContainer>
            <UserPhoto>
                <UserPhotoAlternative>{username.slice(0,1).toUpperCase()}</UserPhotoAlternative>
            </UserPhoto>
            <UsernameTitle>{Username}</UsernameTitle>
            <UsernameTitle>{Email}</UsernameTitle>
            <UsernameTitle>{FullName}</UsernameTitle>    
        </InfoContainer>
    )}else{
        return <Loader />
    }
}