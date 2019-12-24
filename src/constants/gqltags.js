
import gql from 'graphql-tag';

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

export const BOOKMARKS_CHANGE = gql`
    mutation bookmarks($_id: ID!) {
        bookmarks(_id: $_id){
                Bookmarks
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

export const  GET_USER = gql`
            query getUser($Username: String!){
                getUser(Username: $Username){
                    Username
                    Email
                    LikedBlog{
                        BlogLikedID
                        LikedDate
                    }
                    BookmarksList
                    FullName
                }
            }
        `;

export const REGISTER_MUTATION = gql`
        mutation createUser($input: NewUser!) {
                createUser(input: $input){
                    token
              }
            }
    `;

export const LOGIN_MUTATION = gql`
        mutation loginUser($email: String!, $password: String!) {
                loginUser(email: $email, password: $password){
    							token
              }
            }
    `