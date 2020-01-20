const MongoConection = require('../../db/db')
const { ObjectID } = require('mongodb')
const mongodb = require('mongodb')
const {checkUserLogged} = require('./check')

module.exports = {
    profileupload: async(parent, {file}, context) => {
        let DataBase = await MongoConection()
        console.log(file)
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
    }
}