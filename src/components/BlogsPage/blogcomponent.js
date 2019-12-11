import React from 'react'
import { useMutation, useQuery } from '@apollo/react-hooks';
import {BlogPreveiw, PreviewImage, BlogTitle, Hashtag, HashtagContainer,PreviewDescription,BlogFooter } from './styles' 
import { IconsContainer, BookMarks, SavedBookMarks } from '../../constants/icons'
import  {useLikeAction} from '../../hooks/useLikeAction'
import {GET_BLOGS, BOOKMARKS_CHANGE_TRUE, BOOKMARKS_CHANGE_FALSE} from '../../constants/gqltags'

export const BlogComponent = ({ _id, Title, Photo, Likes, Bookmarks, Content, Liked }) =>{
    const BlogId = _id
    const Content_sliced = Content.slice(0, 255) + "..."
    const Like = useLikeAction(BlogId, Liked, Likes)

    const { error, data } = useQuery(GET_BLOGS);
 
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
        {Content_sliced}
        </PreviewDescription>
        <IconsContainer >
            { Bookmarks ? <BookMarks onClick={() => BookmarksChange() }/> : <SavedBookMarks onClick={() => BookmarksChange()} />}
            {Like}
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

