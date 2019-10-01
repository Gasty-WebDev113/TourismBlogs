const { ObjectID } = require('mongodb')
const MongoConection = require('../db/db')

module.exports = {

    getBlogs: async () => {
        let DataBase
        let blogs = [] //This will contain the blogs information
        try {
            DataBase = await MongoConection() //"The patience makes the sage"
            blogs = DataBase.collection('Blogs').find().toArray()
       } catch (error) {
            console.error(error)
        }
        return blogs
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
    }
    
}