const express = require('express');
const { makeExecutableSchema } = require('graphql-tools');
const {readFileSync} = require('fs') //This read the graphQl File (Queries)
const { join } = require('path') 
const gqlmiddleware = require('express-graphql')

//Importing Resolvers
const resolvers = require('./graphql/resolvers')

//Express Server

const app = express()
const port = process.env.PORT
 
//GraphQl const

const typeDefs = readFileSync(join(__dirname, 'graphql', 'schema.graphql'), 'utf-8') //Search schemma

var Schema = makeExecutableSchema({typeDefs, resolvers}) 

app.use('/api', gqlmiddleware({ //When you call the api this needs schemma and the rootValue
    schema: Schema,
    rootValue: resolvers,
    graphiql: true
}))


app.listen(port, ()=>{console.log(`Server listen on port ${port}`)} )