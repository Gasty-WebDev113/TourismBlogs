const { ObjectID } = require('mongo')
const MongoConection = require('../db/db')

module.exports = {

    getBlogs: async ()=>{
        let DataBase
        let Blogs = [] //This will contain the blogs information
        try {
            DataBase = await MongoConection() //"The patience makes the sage"
            Blogs = DataBase.collection('Blogs').find().toArray()
       } catch (error) {
            console.error(error)
        }
        return Blogs
    }



}