const MongoConection = require('../db/db')
const { ObjectID } = require('mongodb')
const {login} = require('./usermutations/login')
const {checkUserLogged} = require('./usermutations/check')
const {addBlogLiked,removeBlogLiked, AddLike, RemoveLike} = require('./usermutations/getLikesandBookmarks')
const bcrypt = require('bcrypt')
const {sign} = require('jsonwebtoken')

module.exports = {

    loginUser: async (root, {email, password}, {SECRET})=> await login({email ,password}),

    createUser: async (root, {input}, {SECRET})=>{ //Get the Secret

        if( !input.Username ){
            throw new Error("El nombre de usuario es obligatorio")
        }

        const defaultList = {
            LikedBlog: []
        }
        const NewUser = Object.assign(defaultList, input)

        let DataBase
        let User 
        
        NewUser.Password = await bcrypt.hash(NewUser.Password, 10) //Encrypt the password por SeCUritY 

        try {
            DataBase = await MongoConection()
            User = await DataBase.collection('Users').insertOne(NewUser)
            input._id = User.insertId //Mongo autoinsert the ID
        } catch (error) {
            console.error("Fallo en la operacion | Faild operation", error)
        } 
        console.log(String(User.insertedId))
        return {
            token: sign({ userId: String(User.insertedId)}, 'wgobuwrugwoghwor', {expiresIn: "15m" } ), //Store the token, the secret (random string) and options(token expires in 15 minutes)   
            success: true,
        }
    },

    createBlog: async (root, {input})=>{

        const defaultvalues = {
            Bookmarks: false,
            Likes: 0,
            Liked: false,
        }
        const NewBlog = Object.assign(defaultvalues, input) //Join defaults and the information of the input
        let DataBase
        let Blog

        //This is when the magic begins
        try {
            DataBase = await MongoConection()
            Blog = await DataBase.collection('Blogs').insertOne(NewBlog) //Insert the new blog on DataBase
            input._id = Blog.insertId //Mongo autoinsert the ID

        } catch (error) {
            console.error("Fallo en la operacion | Faild operation", error)
        }   

        return NewBlog //Send to GraphQL the information 
    },

    addLike: async (parent, args, context) =>{
        const { _id } = args
        let DataBase = await MongoConection()
        let Blogid = _id

        const userAuth = checkUserLogged(context.auth) //Send the JsonWebToken and return the userId to makes queries
        
        const userInfo = await DataBase.collection('Users').findOne({_id: ObjectID(userAuth)}) //Find the user Information
        const LikeVerify = userInfo.LikedBlog.includes(_id) //This search the blog id in the list of ids
        console.log(LikeVerify)

        if(LikeVerify){
            RemoveLike(Blogid)
            removeBlogLiked({ userid: userAuth, Blogid })  
        }else{
            AddLike(Blogid) 
            addBlogLiked({ userid: userAuth, Blogid })
        } 
        return LikeVerify    
    },

    setBookmarks: async (root,{_id}, context) =>{
        let DataBase
        let Bookmarks
        try {
            DataBase = await MongoConection() //"The patience makes the sage"
            await DataBase.collection('Blogs').updateOne(
                {_id: ObjectID(_id) }, {$set: {'Bookmarks': true } 
            })
            Bookmarks = await DataBase.collection('Blogs').findOne({_id: ObjectID(_id)}, {Bookmarks})
       } catch (error) {
            console.error(error)
        }
        return Bookmarks
            
    },

    removeBookmarks: async (root,{_id}, context) =>{
        let DataBase
        let Bookmarks
        try {
            DataBase = await MongoConection() //"The patience makes the sage"
            await DataBase.collection('Blogs').updateOne(
                {_id: ObjectID(_id) }, {$set: {'Bookmarks': false } 
            })
            Bookmarks = await DataBase.collection('Blogs').findOne({_id: ObjectID(_id)}, {Bookmarks})
       } catch (error) {
            console.error(error)
        }
        return Bookmarks
            
    }

}