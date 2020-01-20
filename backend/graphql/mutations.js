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
const {profileupload} = require('./usermutations/profilephoto')

//Blog functions
const {createblog} = require('./blogmutations/createblog')

module.exports = {

    loginUser: async (parent, {email, password})=> await login({email ,password}),

    createUser: async (parent, {input})=> await register({input}),

    editUser: async (parent, {input}, context)=> await edituser({input}, context),

    createBlog: async (parent, {input, files}, context)=>{ await createblog(parent, {input, files}, context)},
    
    profileImageUpload: async(parent, {file}, context) => {await profileupload(parent, {file}, context)},

    addLike: async (parent, {_id}, context) =>{await addlike(context, _id)},

    bookmarks: async(parent, {_id}, context) =>{await bookmarks(context, _id)},
} 