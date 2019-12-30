import React, {useState} from 'react'
import {InfoContainer, Title, DescriptionTextContainer, Edit, UserPhoto, 
UserPhotoAlternative, UserInfoContainer,TitleContainer} from './styles'
import {Changer, Activity, ButtonMode, Blogs} from './modestyles'
import { useQuery } from '@apollo/react-hooks';
import {GET_USER} from '../../constants/gqltags'
import {Loader} from '../Loader'    
import {useLikedDate} from '../../hooks/useLikedDate'
import Context from '../../Context';
import {EditProfileComponent} from '../EditProfile'

export const UserInfo = ({username}) => {

    const [mode, setMode] = useState(true) //Activity or Blogs
    const [editmode, setEdit] = useState(false) //Edit Mode
    const list = useLikedDate(username)

    const {loading, error, data} = useQuery(GET_USER,{
        variables: {Username: username} //Get the user information
    })
    if(loading === false){
    const { Username, Email, FullName, Description} = data.getUser

    return(
        <InfoContainer>
            <Context.Consumer>
                {
                    value => {
                    const Auth = value.Auth
                    return (
                    <UserInfoContainer>
                        {Auth ? (editmode ? <EditProfileComponent username={Username} email={Email} fullname={FullName} description={Description} />: <Edit onClick={() => setEdit(true)}/>) : null }
                        <UserPhoto>
                            <UserPhotoAlternative>{username.slice(0,1).toUpperCase()}</UserPhotoAlternative>
                        </UserPhoto>
                        <TitleContainer>
                            <Title>{Username}</Title>
                            <Title>{Email}</Title>
                            <Title>{Auth ? (FullName === "" ? "ADD YOUR NAME" : FullName) : null }</Title> 
                            <DescriptionTextContainer>
                                {   
                                    Auth ? (Description === undefined ? <p>ADD A DESCRIPTION</p>
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
                        mode === true ? list : null
                    }    
        </InfoContainer>
    )}else{
        return <Loader />
    }
}