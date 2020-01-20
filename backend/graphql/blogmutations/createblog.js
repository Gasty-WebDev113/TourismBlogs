const {checkUserLogged} = require('../usermutations/check')
const MongoConection = require('../../db/db')
const mongodb = require('mongodb')

module.exports = {
    createblog: async(parent, {input, files}, context) => {
    const userAuth = checkUserLogged(context.auth)
    let DataBase = await MongoConection()

    try {
        const defaultvalues = {
            Bookmarks: false,
            Likes: 0,
            Liked: false,
            Author: userAuth,
        }
        const NewBlog = Object.assign(defaultvalues, input) //Join defaults and the information of the input
        let Blog = await DataBase.collection('Blogs').insertOne(NewBlog) //Insert the new blog on DataBase
        input._id = Blog.insertId //Mongo autoinsert the ID

        //Send Images to the Blog

        files.map(async (file) =>{
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
            let UpdateBlogPhotos = await DataBase.collection('Blogs').updateOne(
                {_id: ObjectID( NewBlog._id)},
                {$push: {'Photos': uploadStream.id }}, //Create an array with the ids of the images
                )})
                
    } catch (error) {
        console.error("Fallo en la operacion | Faild operation", error)
    } 
    console.log("Success")
    return {
        success: true,
    } //Send to GraphQL the information 
}}