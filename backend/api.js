const express = require('express')
const { graphql, buildSchema  } = require('graphql')
const gqlmiddleware = require('express-graphql')

//Express Server

const app = express()
const port = 3000
 
//GraphQl const

var Schema = buildSchema(`
    type Query{ 
        hello: String
    }`)

    //Yes, I started the server with a Hello World 

var Root = {
    hello: ()=>{
        return "Hello GraphQl Server"
    }
}

app.use('/api', gqlmiddleware({
    schema: Schema,
    rootValue: Root,
    graphiql: true
}))

app.get('/api', function(req, res){
    res.send('hello')
})

app.listen(port, ()=>{console.log(`Server listen on port ${port}`)} )