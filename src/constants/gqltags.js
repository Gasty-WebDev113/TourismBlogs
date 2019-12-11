
import gql from 'graphql-tag';

export const BOOKMARKS_CHANGE_TRUE = gql`
        mutation setBookmarks($_id: ID!) {
            setBookmarks(_id: $_id){
                Bookmarks
                }
            }
    `

export const BOOKMARKS_CHANGE_FALSE = gql`
        mutation removeBookmarks($_id: ID!) {
            removeBookmarks(_id: $_id){
                Bookmarks
                }
            }
    `

export const  GET_BLOGS = gql`
            {
            getBlogs{
                _id
                Title
                Photo
                Likes
                Bookmarks
                Content
                Liked
                    }
            }
    `;



export const LIKE_QUERY = gql`
    mutation addLike($_id: ID!) {
            addLike(_id: $_id){
                Likes
            }
        }
    `;
export const  GET_USER_INFO = gql`
                {
                getUserInfo{
                    Username
                    }
                }
        `;

export const REGISTER_MUTATION = gql`
        mutation createUser($input: NewUser!) {
                createUser(input: $input){
                    token
              }
            }
    `

export const LOGIN_MUTATION = gql`
        mutation loginUser($email: String!, $password: String!) {
                loginUser(email: $email, password: $password){
    							token
              }
            }
    `