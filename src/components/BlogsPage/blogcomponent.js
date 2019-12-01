import React from 'react'
import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/react-hooks';
import Context from '../../Context'
import {BlogPreveiw, PreviewImage, BlogTitle, Hashtag, HashtagContainer,PreviewDescription,BlogFooter } from './styles' 
import { IconsContainer, BookMarks, SavedBookMarks, Like, LikeNumber, LikedIcon } from './iconsstyles'

export const BlogComponent = ({ _id, Title, Photo, Likes, Bookmarks, Content, Liked }) =>{
    const BlogId = _id
    const LIKE_QUERY = gql`
        mutation addLike($_id: ID!) {
                addLike(_id: $_id){
                    Likes
                }
            }
    `
    const BOOKMARKS_CHANGE_TRUE = gql`
        mutation setBookmarks($_id: ID!) {
            setBookmarks(_id: $_id){
                Bookmarks
                }
            }
    `

    const BOOKMARKS_CHANGE_FALSE = gql`
        mutation removeBookmarks($_id: ID!) {
            removeBookmarks(_id: $_id){
                Bookmarks
                }
            }
    `
    const  GET_BLOGS = gql`
            {
            getBlogs{
                _id
                Likes
                Bookmarks
                Liked
                    }
            }
    `;


    const { error, data } = useQuery(GET_BLOGS);

    const [addLike, {loading}] = useMutation(LIKE_QUERY, { //ALELUYA ESTA MIERDA FUNCIONA !!!!! / ALELUYA THIS SHIT WORKS!!!!!!
        variables: { _id: BlogId },
        awaitRefetchQueries: true,
        refetchQueries: [{ query: GET_BLOGS }]
    })

    const Liker = () =>{
        loading ? console.log("Cargando....") : (addLike())
    }
    
    //Bookmarks

    const [BookMarkTrue, {loading : booktrueloading}] = useMutation(BOOKMARKS_CHANGE_TRUE, { 
        variables: { _id: BlogId },
        awaitRefetchQueries: true,
        refetchQueries: [{ query: GET_BLOGS }]
    })

    const [BookMarkFalse, {loading : bookfalseloading}] = useMutation(BOOKMARKS_CHANGE_FALSE, { 
        variables: { _id: BlogId },
        awaitRefetchQueries: true,
        refetchQueries: [{ query: GET_BLOGS }]
    })

    const BookmarksChange = () =>{
        bookfalseloading | booktrueloading ? console.log("Cargando....") : (Bookmarks ? BookMarkFalse() : BookMarkTrue())
        console.log(Bookmarks)
    }

return(

    <BlogPreveiw>
        <PreviewImage></PreviewImage>
        <BlogTitle to={`/blogs/${_id}`}>{Title}</BlogTitle>
        <PreviewDescription>
        {Content}
        </PreviewDescription>
        <IconsContainer >
            { Bookmarks ? <BookMarks onClick={() => BookmarksChange() }/> : <SavedBookMarks onClick={() => BookmarksChange()} />}
            <Context.Consumer>
                {
                    value => {
                    if(value.Auth !== null){
                       return Liked ?  <LikedIcon onClick={() => Liker()}/> :  <Like onClick={() => Liker()} />
                    }else{
                        return <Like onClick={() => alert("Para poder hacer like necesitas estar loggeado")} />} 
                    }
                }
            </Context.Consumer>
            <LikeNumber>{Likes}</LikeNumber>
        </IconsContainer>
                    
        <BlogFooter>
            <HashtagContainer>
                <Hashtag>$HELLO</Hashtag>
                <Hashtag>$HELLO</Hashtag>
                <Hashtag>$HELLO</Hashtag>
                <Hashtag>$HELLO</Hashtag>
            </HashtagContainer>
        </BlogFooter>
    </BlogPreveiw>
)
}