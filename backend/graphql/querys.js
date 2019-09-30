const { ObjectID } = require('mongo')
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
    }

}