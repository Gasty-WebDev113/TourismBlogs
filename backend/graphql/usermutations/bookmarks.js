const MongoConection = require('../../db/db')
const { ObjectID } = require('mongodb')

module.exports = {
    removeBookmarks: async ({ userid, Blogid }) => {
        try {
            let DataBase = await MongoConection()
            let User = await DataBase.collection('Users').updateOne(
                {_id: ObjectID(userid)},
                {$pull: {'BookmarksList': Blogid }},
            )
            
        } catch (error) {
            console.error("Fallo en la operacion de Bookmarks | Faild Bookmarks operation", error)
        }      
    },

    addBookmarks: async ({ userid, Blogid }) => {
        try {
            let DataBase = await MongoConection()
            let User = await DataBase.collection('Users').updateOne(
                {_id: ObjectID(userid)},
                {$push: {'BookmarksList': Blogid }},
            )
            
        } catch (error) {
            console.error("Fallo en la operacion de Bookmarks| Faild Bookmarks operation", error)
        }      
    },
}