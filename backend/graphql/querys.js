const { ObjectID } = require('mongodb')
const MongoConection = require('../db/db')
const {checkUserLogged} = require('./usermutations/check')

module.exports = {

    getBlogs: async (parent, args, context) => {
        let DataBase
        let blogs = [] //This will contain the blogs information
        if(context.auth === "nothing" || context.auth === null){ //If you are not logged
            console.log("Forma no loggueada funcionando")
            try {
                DataBase = await MongoConection() //"The patience makes the sage"
                blogs = DataBase.collection('Blogs').find().toArray()
                
                for(let blog of Object.values(await blogs)){
                    blog.Liked = false}

           } catch (error) {
                console.error(error)
            }
            return blogs
            
        }else{
            DataBase = await MongoConection()
            const userAuth = checkUserLogged(context.auth)

            const userLikedList = await DataBase.collection('Users').findOne({_id: ObjectID(userAuth)})
            
            blogs = DataBase.collection('Blogs').find().toArray()

            const BlogList = userLikedList.LikedBlog
            for await (let blog of Object.values(await blogs)){ //This filter the id of the list with the blogs ids and set the liked
                let Bloglistverify = BlogList.includes(blog._id.toString())
                await Bloglistverify ? blog.Liked = true : blog.Liked = false  
            }
         return blogs
        }},

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

    getUserInfo: async (parent, args, context) =>{
        let DataBase = await MongoConection()
        const userAuth = checkUserLogged(context.auth)

        const UserInfo = await DataBase.collection('Users').findOne({_id: ObjectID(userAuth)})
        console.log(UserInfo)
        return UserInfo
    },    
}