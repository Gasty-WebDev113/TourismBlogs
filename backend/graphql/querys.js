const { ObjectID } = require('mongodb')
const MongoConection = require('../db/db')
const {checkUserLogged} = require('./usermutations/check')
const {ListofLikedBlogs} = require('./usermutations/getLikesandBookmarks')

module.exports = {

    getBlogsUserLogged: async ({_id}, context) => {
        console.log(context)
        const userID = checkUserLogged(context.Auth) //Return the User ID
        
        return ListofLikedBlogs({_id, likedblogs: userID.favs})
        
    },


    getBlogs: async () => {
        let DataBase
        let blogs = [] //This will contain the blogs information
        try {
            DataBase = await MongoConection() //"The patience makes the sage"
            blogs = DataBase.collection('Blogs').find().toArray()
       } catch (error) {
            console.error(error)
        }
        return blogs
    },

    getBlog: async (root, { _id }) =>{
        let DataBase
        let blog
        try {
            DataBase = await MongoConection() //"The patience makes the sage"
            blog = DataBase.collection('Blogs').findOne({_id: ObjectID(_id)})
       } catch (error) {
            console.error(error)
        }
        return blog
    },

    
}