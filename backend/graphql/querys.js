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
                    blog.Liked = false;
                    blog.Bookmarks = false
                }

           } catch (error) {
                console.error(error)
            }
            return blogs
            
        }else{
            DataBase = await MongoConection()
            const userAuth = checkUserLogged(context.auth)

            const user = await DataBase.collection('Users').findOne({_id: ObjectID(userAuth)})
            
            blogs = DataBase.collection('Blogs').find().toArray()
            let BlogLikedList = []
            user.LikedBlog.map(Blog => BlogLikedList.push(Blog.BlogLikedID))
            const BookmarksList = user.BookmarksList

            console.log(BlogLikedList)

            for await (let blog of Object.values(await blogs)){ //This filter the id of the list with the blogs ids and set the liked
                let BlogLikeListVerify = BlogLikedList.includes(blog._id.toString())
                let BlogBookmarksverify = BookmarksList.includes(blog._id.toString())

                await BlogLikeListVerify ? blog.Liked = true : blog.Liked = false;
                await BlogBookmarksverify ? blog.Bookmarks = true : blog.Bookmarks = false;  
            }
         return blogs   
        }},
    getBookmarks: async (parent, args, context) => {
        let DataBase
        let Bookmarks = [] //This will contain the blogs information
        
        const userAuth = checkUserLogged(context.auth)
        
        const user = await DataBase.collection('Users').findOne({_id: ObjectID(userAuth)})
        console.log(userAuth)
        const BlogList = await DataBase.collection('Blogs').find().toArray()
        const BookmarksList = user.BookmarksList
        
        for await (let blog of Object.values(await BlogList)){ //This filter the id of the list with the blogs ids and set the liked
                let BlogBookmarksverify = BookmarksList.includes(blog._id.toString())
                if(BlogBookmarksverify) Bookmarks.push(blog) 
            }
         return Bookmarks
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

    getUserInfo: async (parent, args, context) =>{
        let DataBase = await MongoConection()
        const userAuth = checkUserLogged(context.auth)

        const UserInfo = await DataBase.collection('Users').findOne({_id: ObjectID(userAuth)})
        return UserInfo
    },    

    getUser: async (parent, {Username}) =>{
        
        let DataBase = await MongoConection()

        const Info = await DataBase.collection('Users').findOne({'Username': `${Username}`})
        
        return Info
    },
}