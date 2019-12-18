const MongoConection = require('../db/db')
const { ObjectID } = require('mongodb')
//User functions
const {login} = require('./usermutations/login')
const {register} = require('./usermutations/register')
const {addlike} = require('./usermutations/addlike')
const {bookmarks} = require('./usermutations/addbookmarks')

module.exports = {

    loginUser: async (root, {email, password})=> await login({email ,password}),

    createUser: async (root, {input})=> await register({input}),

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

    addLike: async (parent, {_id}, context) =>{await addlike(context, _id)},

    bookmarks: async(parent, {_id}, context) =>{await bookmarks(context, _id)},

}