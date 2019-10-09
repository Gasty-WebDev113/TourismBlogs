const MongoConection = require('../db/db')
const { ObjectID } = require('mongodb')
const {login} = require('../auth/auth')
const {sign} = require('jsonwebtoken')

module.exports = {

    loginUser: async (root, {email, password}, {SECRET})=>{
        DataBase = await MongoConection()
        const user = await DataBase.collection('Users').findOne({ Email: email })
        //First: Search in the database the mail
        console.log(user)
        console.log(user.Password)
        console.log(password)

        if( !user ){
            throw new Error("No se encontro el usuario :(")
        }

        if( user.Password !== password ){ //Second: compare the password
            throw new Error("Contraseña incorrecta")
        }
        //succesful login man

        return { //Third: change the success and create the token
            success: true,
            token: sign({ userId: user._id }, 'wgobuwrugwoghwor', {expiresIn: "15m" } ) //Store the token, the secret (random string) and options(token expires in 15 minutes) 
        }

    },

    createUser: async (root, {input}, {SECRET})=>{ //Get the Secret

        if( !input.Username ){
            throw new Error("El nombre de usuario es obligatorio")
        }

        const NewUser = input
        let DataBase
        let User 

        
        try {
            DataBase = await MongoConection()
            User = await DataBase.collection('Users').insertOne(NewUser)
            input._id = User.insertId //Mongo autoinsert the ID
        } catch (error) {
            console.error("Fallo en la operacion | Faild operation", error)
        }   

        return NewUser 
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

    addLike: async (root,{_id}) =>{
        let DataBase
        let NewLike
        try {
            DataBase = await MongoConection() //"The patience makes the sage"
            await DataBase.collection('Blogs').updateOne(
                {_id: ObjectID(_id) },
                 
                {$set: {'Liked': true}, $inc: {'Likes': 1 }}, //$inc Increment in 1 the Likes
            )
            NewLike = await DataBase.collection('Blogs').findOne({_id: ObjectID(_id)},)
       } catch (error) {
            console.error(error)
        }
        return NewLike
            
    },

    removeLike: async (root,{_id}) =>{
        let DataBase
        let NewLike
        try {
            DataBase = await MongoConection() //"The patience makes the sage"
            await DataBase.collection('Blogs').updateOne(
                {_id: ObjectID(_id) }, 
                {$set: {'Liked': false}, $inc: {'Likes': -1 }}, //$inc Increment in 1 the Likes
            )
            NewLike = await DataBase.collection('Blogs').findOne({_id: ObjectID(_id)},)
       } catch (error) {
            console.error(error)
        }
        return NewLike
            
    },

    setBookmarks: async (root,{_id}) =>{
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

    removeBookmarks: async (root,{_id}) =>{
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