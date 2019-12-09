const MongoConection = require('../db/db')
const { ObjectID } = require('mongodb')
//User functions
const {login} = require('./usermutations/login')
const {register} = require('./usermutations/register')
const {addlike} = require('./usermutations/addlike')

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