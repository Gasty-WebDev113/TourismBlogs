import React, {useState} from 'react'
import {InfoContainer, Title, Description, UserPhoto, UserPhotoAlternative, UserInfoContainer, Changer, Activity, BlogsLikedDate , ButtonMode, Blogs, BlogsActivityContainer} from './styles'
import { useQuery } from '@apollo/react-hooks';
import {GET_USER} from '../../constants/gqltags'
import {GET_BOOKMARKS} from '../../constants/gqltags'
import {Loader} from '../Loader'
import {BlogsListComponent} from '../BlogsList/blogcomponent'
import Moment from 'react-moment';

export const UserInfo = ({username}) => {

    const [mode, setmode] = useState(false)

    const {data: blogdata, loading: loadingblogdata, error: errorblogdata} = useQuery(GET_BOOKMARKS)

    const {loading, error, data} = useQuery(GET_USER,{
        variables: {Username: username}
    })
    
    if(loading === false && loadingblogdata === false){
    const { Username, Email, FullName, LikedBlog } = data.getUser
    let LikedList = []
    console.log(typeof LikedBlog)
    LikedBlog.reverse().map(Liked =>{
        LikedList[Liked.BlogLikedID] = new Date(Liked.LikedDate)}) 
    //Object with LikedID as a key and the Date as a value
    let LikedListReversed = LikedList.sort()
    //The last of the values of the object it's the most recent date

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
            <BlogsActivityContainer>
                {
                    blogdata.getBlogs.map(Blog => { 
                        if(Object.keys(LikedListReversed).includes(Blog._id)){ 
            //Being the key and the Blog._id the same, I render the date in base of the Blog._id  
                            let date = LikedListReversed[Blog._id]
                            let now = new Date()
                            return(   
                                <>          
                                    <BlogsLikedDate>{Username} liked at {" "}
                                        {
                                        date < new Date(now.getTime() - (60*60*24*7*1000))
                                            ? <Moment format="YYYY-MM-DD HH">{date}</Moment>
                                            : <Moment fromNow>{date}</Moment>
                                        }
                                    </BlogsLikedDate>
                                    <BlogsListComponent {...Blog} />
                                </>
                                )}})
                }
            </BlogsActivityContainer>

        </InfoContainer>
    )}else{
        return <Loader />
    }
}