const MongoConection = require('../../db/db')
const { ObjectID } = require('mongodb')

module.exports = {

    ListofLikedBlogs: async ({ id, likedblogs }) =>{
        let DataBase = await MongoConection()
        let LikedBlogs = await DataBase.collection('Blogs').find(
            {$filter: ["5d9206ab45145e28c0c44fe4"]}
        )
        return "Hello"
    },

    removeBlogLiked: async ({ userid, Blogid }) => {
        try {
            let DataBase = await MongoConection()
            let User = await DataBase.collection('Users').updateOne(
                {_id: ObjectID(userid)},
                {$pull: {'LikedBlog': Blogid }},
            )
            
        } catch (error) {
            console.error("Fallo en la operacion | Faild operation", error)
        }      
    },

    addBlogLiked: async ({ userid, Blogid }) => {
        try {
            let DataBase = await MongoConection()
            let User = await DataBase.collection('Users').updateOne(
                {_id: ObjectID(userid)},
                {$push: {'LikedBlog': Blogid }},
            )
            
        } catch (error) {
            console.error("Fallo en la operacion | Faild operation", error)
        }      
    },

    AddLike: async (BlogId) =>{
        
        let DataBase
        let NewLike
        try {
            DataBase = await MongoConection() //"The patience makes the sage"
            await DataBase.collection('Blogs').updateOne(
                {_id: ObjectID(BlogId) },
                 
                {$set: {'Liked': true}, $inc: {'Likes': 1 }}, //$inc Increment in 1 the Likes
            )
            NewLike = await DataBase.collection('Blogs').findOne({_id: ObjectID(BlogId)})
       } catch (error) {
            console.error(error)
        }
        return NewLike
    },

    RemoveLike: async (BlogId) =>{
        
        let DataBase
        let NewLike
        try {
            DataBase = await MongoConection() //"The patience makes the sage"
            await DataBase.collection('Blogs').updateOne(
                {_id: ObjectID(BlogId) },
                 
                {$set: {'Liked': false}, $inc: {'Likes': -1 }}, //$inc Increment in -1 the Likes
            )
            NewLike = await DataBase.collection('Blogs').findOne({_id: ObjectID(BlogId)})
       } catch (error) {
            console.error(error)
        }
        return NewLike
    }
}


