const MongoConection = require('../../db/db')
const { ObjectID } = require('mongodb')

module.exports = {

    removeBlogLiked: async ({ userid, Blogid }) => {
        try {
            let DataBase = await MongoConection()
            let User = await DataBase.collection('Users').updateOne(
                {_id: ObjectID(userid)},
                {$pull: {'LikedBlog':{
                    BlogLikedID: Blogid
                }  }},
            )
            
        } catch (error) {
            console.error("Fallo en la operacion | Faild operation", error)
        }      
    },

    addBlogLiked: async ({ userid, Blogid }) => {
        let today = new Date().toISOString() //Temporal Solution, sorry
        try {
            let DataBase = await MongoConection()
            let User = await DataBase.collection('Users').updateOne(
                {_id: ObjectID(userid)},
                {$push: {'LikedBlog': { //This creates the like and the activity
                    BlogLikedID: Blogid,
                    LikedDate: today
                } }, },
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
                //Search ID and set the liked and increment the like
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


