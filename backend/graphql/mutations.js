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
    },

    addLike: async (root,{_id}) =>{
        let DataBase
        let NewLike
        try {
            DataBase = await MongoConection() //"The patience makes the sage"
            await DataBase.collection('Blogs').updateOne(
                {_id: ObjectID(_id) }, {$inc: {'Likes': 1 } //$inc Increment in 1 the Likes
            })
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
                {_id: ObjectID(_id) }, {$set: {'Bookmarks': true } //$inc Increment in 1 the Likes
            })
            Bookmarks = await DataBase.collection('Blogs').findOne({_id: ObjectID(_id)}, {Bookmarks})
       } catch (error) {
            console.error(error)
        }
        return Bookmarks
            
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