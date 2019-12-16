import React, {useState} from 'react'
import {InfoContainer, UsernameTitle, UserPhoto, UserPhotoAlternative, UserInfoContainer, Changer, Activity, ButtonMode, Blogs} from './styles'
import { useQuery } from '@apollo/react-hooks';
import {GET_USER} from '../../constants/gqltags'
import {Loader} from '../Loader'

export const UserInfo = ({username}) => {

    const [mode, setmode] = useState(false)

    const {loading, error, data} = useQuery(GET_USER,{
        variables: {Username: username}
    })

    if(loading === false){
    const { Username, Email, FullName } = data.getUser
    return(
        <InfoContainer>
            <UserInfoContainer>
                <UserPhoto>
                    <UserPhotoAlternative>{username.slice(0,1).toUpperCase()}</UserPhotoAlternative>
                </UserPhoto>
                <UsernameTitle>{Username}</UsernameTitle>
                <UsernameTitle>{Email}</UsernameTitle>
                <UsernameTitle>{FullName}</UsernameTitle> 
            </UserInfoContainer>   

            <Changer>
                <ButtonMode movement={mode}></ButtonMode>
                <Activity lettercolors={mode} onClick={() => setmode(true)}>Activity</Activity>
                <Blogs lettercolors={!mode} onClick={() => setmode(false)}>Blogs</Blogs>
            </Changer>
        </InfoContainer>
    )}else{
        return <Loader />
    }
}