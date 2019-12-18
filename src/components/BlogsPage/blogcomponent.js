import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import {BlogPreveiw, PreviewImage, BlogTitle, Hashtag, HashtagContainer,PreviewDescription,BlogFooter } from './styles' 
import { IconsContainer } from '../../constants/icons'
import  {useLikeAction} from '../../hooks/useLikeAction'
import {useBookmarksAction} from '../../hooks/useBookmarksAction'
import {GET_BLOGS} from '../../constants/gqltags'

export const BlogComponent = ({ _id, Title, Photo, Likes, Bookmarks, Content, Liked }) =>{
    const BlogId = _id
    const Content_sliced = Content.slice(0, 255) + "..."
    const Like = useLikeAction(BlogId, Liked, Likes)
    const BookMarks = useBookmarksAction(BlogId, Bookmarks)
    const { error, data } = useQuery(GET_BLOGS);

return(

    <BlogPreveiw>
        <PreviewImage></PreviewImage>
        <BlogTitle to={`/blogs/${_id}`}>{Title}</BlogTitle>
        <PreviewDescription>
        {Content_sliced}
        </PreviewDescription>
        <IconsContainer >
            {BookMarks}
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

