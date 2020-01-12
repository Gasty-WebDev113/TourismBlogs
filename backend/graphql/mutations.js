const MongoConection = require('../db/db')
const { ObjectID } = require('mongodb')
const mongodb = require('mongodb')
const {checkUserLogged} = require('./usermutations/check')

//User functions
const {login} = require('./usermutations/login')
const {register} = require('./usermutations/register')
const {addlike} = require('./usermutations/addlike')
const {bookmarks} = require('./usermutations/addbookmarks')
const {edituser} = require('./usermutations/edituser')

module.exports = {

    loginUser: async (parent, {email, password})=> await login({email ,password}),

    createUser: async (parent, {input})=> await register({input}),

    editUser: async (parent, {input}, context)=> await edituser({input}, context),

    createBlog: async (parent, {input}, {files}, context)=>{
    
        const userAuth = checkUserLogged(context.auth)

        const defaultvalues = {
            Bookmarks: false,
            Likes: 0,
            Liked: false,
            Author: userAuth
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

    profileImageUpload: async(parent, {file}, context) => {
        let DataBase = await MongoConection()
        
        //Get the User ID
        const userAuth = checkUserLogged(context.auth)

        const { createReadStream, filename, mimetype, encoding } = await file
        const stream = createReadStream()
        const bucket = new mongodb.GridFSBucket(DataBase);
        const uploadStream = bucket.openUploadStream(filename, {
            contentType: mimetype,
        });
        await new Promise((resolve, reject) => {
            stream
            .pipe(uploadStream)
            .on("error", reject)
            .on("finish", resolve);
        });

        //Set the id of the image in the user file list
        
        let User = await DataBase.collection('Users').updateOne(
            {_id: ObjectID(userAuth)},
            {$set: {'ProfilePhoto': uploadStream.id } },
        )

        return { _id: uploadStream.id, filename, mimetype, encoding }
    },

    addLike: async (parent, {_id}, context) =>{await addlike(context, _id)},

    bookmarks: async(parent, {_id}, context) =>{await bookmarks(context, _id)},

} 