const MongoConection = require('../../db/db')
const { ObjectID } = require('mongodb')
const {addBookmarks, removeBookmarks} = require('./bookmarks')
const {checkUserLogged} = require('./check')

module.exports = {

    bookmarks: async (context, _id) =>{

        let DataBase = await MongoConection()

        const userAuth = checkUserLogged(context.auth)
        
        const userInfo = await DataBase.collection('Users').findOne({_id: ObjectID(userAuth)})
        const BookmarksInclude = userInfo.BookmarksList.includes(_id)

        if(BookmarksInclude){
            removeBookmarks({ userid: userAuth, Blogid: _id })  
        }else{
            addBookmarks({ userid: userAuth, Blogid: _id})
        } 
        return BookmarksInclude    
    },
}