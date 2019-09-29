const querys = require('../graphql/querys')

const Blogs = [
    {
        id:"1",
        Content:"Hello",
        Title:"World",
        Photo: "Photo",
        Bookmarks: true,
    },
    {
        id:"2",
        Content:"Hello",
        Title:"World",
        Photo: "Photo2",
        Bookmarks: true,
    },
    {
        id:"3",
        Content:"Hello",
        Title:"World",
        Photo: "Photo2",
        Bookmarks: true,
    }
]

module.exports = { //Export to be imported in the index / If you use this resolvers, you declarate this in the schema
    Query: querys,
    } 
