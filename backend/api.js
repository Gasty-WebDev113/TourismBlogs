const express = require('express');
const { join } = require('path') 
const { path } = require('path')
var dotenv = require('dotenv').config()
const cors = require('cors')
const { makeExecutableSchema } = require('graphql-tools');
const {readFileSync} = require('fs') //This read the graphQl File (Queries)
const graphqlHTTP = require('express-graphql')
const { ApolloServer, gql } = require('apollo-server');

//Importing Resolvers
const resolvers = require('./graphql/resolvers')

//Express Server

const app = express()
const port = process.env.PORT
const SECRET = "ghwoeruivbhoeirbhnrowibvnwrpiobnrwoibn" // Json WebToken Secret

//Cors Middleware | Api Permissions

app.use(cors())

//GraphQl const

const typeDefs = readFileSync(join(__dirname, 'graphql', 'schema.graphql'), 'utf-8') //Search schemma

var Schema = makeExecutableSchema({typeDefs, resolvers}) 


/*app.use('/api', graphqlHTTP((request) => ({ //When you call the api this needs schemma and the rootValue
    schema: Schema,
    rootValue: resolvers,  
    context: { startTime: Date.now() },
    graphiql: true,
    extensions,
     //AuthToken: String(request.headers.authorization)
})))*/

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => ({
        auth: req.headers.authorization || 'nothing'
    })
  })

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
}); 


  

//app.listen(port, ()=>{console.log(`Server listen on port ${port}`)} )