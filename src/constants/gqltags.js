
import gql from 'graphql-tag';

export const  GET_BLOGS = gql`
            {
            getBlogs{
                _id
                Title
                Photos
                Likes
                Bookmarks
                Content
                Liked
                    }
            }
    `;

export const  GET_BOOKMARKS = gql`
            {
            getBookmarks{
                _id
                Title
                Photos
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
                    ProfilePhoto
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
                    Description
                    ProfilePhoto
                }
            }
        `;

export const CREATE_BLOG = gql`
mutation createBlog($input: BlogCreate!, $files: [Upload!]) {
    createBlog(input: $input, files: $files){
            success
      }
    }
`;

export const EDIT_USER_MUTATION = gql`
        mutation editUser($input: EditUser!) {
            editUser(input: $input){
                    success
              }
            }
    `;

export const UPLOAD_PROFILE_PHOTO = gql`
mutation ProfileImageUpload($file: Upload!) {
  profileImageUpload(file: $file) {
    filename
    mimetype
    encoding
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