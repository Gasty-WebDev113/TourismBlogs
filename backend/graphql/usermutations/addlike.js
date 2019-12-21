const MongoConection = require('../../db/db')
const { ObjectID } = require('mongodb')
const {addBlogLiked,removeBlogLiked, AddLike, RemoveLike} = require('./likesandliked')
const {checkUserLogged} = require('./check')

module.exports = {

    addlike: async (context, _id) =>{
      
        let DataBase = await MongoConection()
        let Blogid = _id

        const userAuth = checkUserLogged(context.auth) //Send the JsonWebToken and return the userId to makes queries
        const userInfo = await DataBase.collection('Users').findOne({_id: ObjectID(userAuth)}) //Find the user Information
        const BlogLikedList = []
        userInfo.LikedBlog.map(Blog => BlogLikedList.push(Blog.BlogLikedID))

        const LikeVerify =  BlogLikedList.includes(_id)//This search the blog id in the list of ids

        if(LikeVerify){
            RemoveLike(Blogid)
            removeBlogLiked({ userid: userAuth, Blogid })  
        }else{
            AddLike(Blogid) 
            addBlogLiked({ userid: userAuth, Blogid })
        } 
        return LikeVerify    
    },
}