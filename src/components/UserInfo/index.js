import React, {useState} from 'react'
import {InfoContainer, Title, DescriptionTextContainer, Edit, UserPhoto, UserInfoContainer,TitleContainer} from './styles'
import {Changer, Activity, ButtonMode, Blogs} from './modestyles'
import { useQuery } from '@apollo/react-hooks';
import {GET_USER, GET_USER_INFO} from '../../constants/gqltags'
import {Loader} from '../Loader'    
import {useLikedDate} from '../../hooks/useLikedDate'
import {useAuthorDate} from '../../hooks/useAuthorDate'
import {useUploadImage} from '../../hooks/useUploadImage'
import Context from '../../Context';
import {EditProfileComponent} from '../EditProfile'

export const UserInfo = ({username}) => {

    const [mode, setMode] = useState(true) //Activity or Blogs
    const [editmode, setEdit] = useState(false) //Edit Mode
    const likedlist = useLikedDate(username)
    const authorlist = useAuthorDate(username)
    const upload = useUploadImage()

    const {loading: userload, data: userdata} = useQuery(GET_USER_INFO)

    const {loading, error, data} = useQuery(GET_USER,{
        variables: {Username: username} //Get the user information
    })
    if(loading === false && userload === false){
    const { Username, Email, FullName, Description, _id, ProfilePhoto } = data.getUser //Get the ID of the user
    
    return(
        <InfoContainer>
            <Context.Consumer>
                {
                    value => {
                    const Auth = value.Auth
                    return (
                    <UserInfoContainer>
                        {Auth && userdata.getUserInfo._id === _id && Auth && userdata !== null ? (editmode ? <EditProfileComponent username={Username} email={Email} fullname={FullName} description={Description} />: <Edit onClick={() => setEdit(true)}/>) : null }
                        <UserPhoto photo={ProfilePhoto ? `http://localhost:4000/images/${ProfilePhoto}`: null} >
                            {
                               Auth && userdata.getUserInfo._id === _id && Auth && userdata !== null ? upload : null
                            } 
                        </UserPhoto>
                        <TitleContainer>
                            <Title>{Username}</Title>
                            <Title>{Email}</Title>
                            <Title>{Auth ? (FullName === "" ? "ADD YOUR NAME" : FullName) : null }</Title> 
                            <DescriptionTextContainer>
                                {   
                                    Auth && userdata.getUserInfo._id === _id && Auth && userdata !== null ? (Description === undefined ? <p>ADD A DESCRIPTION</p>
                                        : Description) : (Description === undefined ? null : Description)
                                }
                            </DescriptionTextContainer>
                        </TitleContainer>
                    </UserInfoContainer>)
                    }}
                </Context.Consumer>   

                <Changer>
                    <ButtonMode movement={mode}></ButtonMode>
                    <Activity lettercolors={mode} onClick={() => setMode(true)}>Activity</Activity>
                    <Blogs lettercolors={!mode} onClick={() => setMode(false)}>Blogs</Blogs>
                </Changer>
                    {
                        mode === true ? likedlist : authorlist
                    }
                    
        </InfoContainer>
    )}else{
        return <Loader />
    }
}