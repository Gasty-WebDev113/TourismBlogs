const MongoConection = require('../db/db')
const { ObjectID } = require('mongodb')

module.exports = {

    createBlog: async (root, {input})=>{

        const defaultvalues = {
            Bookmarks: false,
            Likes: 0
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
    }

    /* MUTATION EXAMPLE
    
        mutation{
  createBlog(input:{
    Title: "Go To Sweden",
    Content:"Hello this is a Mutation",
    Photo:"Not Avaible",
  }) {
    _id
    Title
    Content
    Title
    Bookmarks
		Photo
  }
}

    */

}