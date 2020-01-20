import React from 'react'
import { IconsContainer } from '../../constants/icons'
import  {useLikeAction} from '../../hooks/useLikeAction'
import  {useBookmarksAction} from '../../hooks/useBookmarksAction'

export const LikeandBookmarks = ({_id, Liked, Likes, Bookmarks}) => {
    const Like = useLikeAction(_id, Liked, Likes)
    const BookMarks = useBookmarksAction(_id, Bookmarks)
    console.log(_id,Liked, Likes, Bookmarks )

    return (
        <IconsContainer >
            {BookMarks}
            {Like}
        </IconsContainer>
    )
}