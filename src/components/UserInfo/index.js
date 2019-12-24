import React, {useState} from 'react'
import {InfoContainer, Title, Description, UserPhoto, UserPhotoAlternative, UserInfoContainer, Changer, Activity, BlogsLikedDate , ButtonMode, Blogs, BlogsActivityContainer} from './styles'
import { useQuery } from '@apollo/react-hooks';
import {GET_USER} from '../../constants/gqltags'
import {GET_BOOKMARKS} from '../../constants/gqltags'
import {Loader} from '../Loader'
import {useLikedDate} from '../../hooks/useLikedDate'

export const UserInfo = ({username}) => {

    const [mode, setmode] = useState(false)
    const list = useLikedDate(username)

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
                <Title>{Username}</Title>
                <Title>{Email}</Title>
                <Title>{FullName}</Title> 
                <Description>{}</Description>
            </UserInfoContainer>   

            <Changer>
                <ButtonMode movement={mode}></ButtonMode>
                <Activity lettercolors={mode} onClick={() => setmode(true)}>Activity</Activity>
                <Blogs lettercolors={!mode} onClick={() => setmode(false)}>Blogs</Blogs>
            </Changer>
            
                {
                    list
                }
            
                
        </InfoContainer>
    )}else{
        return <Loader />
    }
}