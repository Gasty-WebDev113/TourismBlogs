const { ObjectID } = require('mongodb')
const MongoConection = require('../db/db')
const {checkUserLogged} = require('./usermutations/check')

module.exports = {

    getBlogs: async (parent, args, context) => {
        let DataBase
        let blogs = [] //This will contain the blogs information
        if(context.auth === "nothing" || context.auth === null){ //If you are not logged
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

            for await (let blog of Object.values(await blogs)){ //This filter the id of the list with the blogs ids and set the liked
                let BlogLikeListVerify = BlogLikedList.includes(blog._id.toString())
                let BlogBookmarksverify = BookmarksList.includes(blog._id.toString())

                await BlogLikeListVerify ? blog.Liked = true : blog.Liked = false;
                await BlogBookmarksverify ? blog.Bookmarks = true : blog.Bookmarks = false;  
            }
         return blogs   
        }},

    getBookmarks: async (parent, args, context) => {
        let DataBase = await MongoConection()
        let Bookmarks = [] //This will contain the blogs information
        const userAuth = checkUserLogged(context.auth)
        const user = await DataBase.collection('Users').findOne({_id: ObjectID(userAuth)})
        const BlogList = await DataBase.collection('Blogs').find().toArray()
        
        const BookmarksList = user.BookmarksList
        
        for (let blog of Object.values(await BlogList)){ //This filter the id of the list with the blogs ids and set the liked
                let BlogBookmarksverify = BookmarksList.includes(blog._id.toString())
                if(BlogBookmarksverify) Bookmarks.push(blog) 
            }
        return Bookmarks
    },

    getBlog: async (parent, {_id}, context) =>{
        let DataBase
        let Blog
        try {
            DataBase = await MongoConection() //"The patience makes the sage"
            Blog = DataBase.collection('Blogs').findOne({_id: ObjectID(_id)})
       } catch (error) {
            console.error(error)
        }
        return Blog
    },

    getUserInfo: async (parent, args, context) =>{
        let DataBase = await MongoConection()
        
        if(context.auth === 'nothing'){
            return null
        }else{
            const userAuth = checkUserLogged(context.auth)
            const UserInfo = await DataBase.collection('Users').findOne({_id: ObjectID(userAuth)})
            console.log(UserInfo)
            return UserInfo
        }

        
    },    

    getUser: async (parent, {Username, _id}) =>{
        let DataBase = await MongoConection()
        if (Username !== undefined){
            const Info = await DataBase.collection('Users').findOne({'Username': `${Username}`})
            return Info
        }else if(_id !== undefined){
            const Info = await DataBase.collection('Users').findOne({_id: ObjectID(_id)})
            return Info
        }  
    },
}