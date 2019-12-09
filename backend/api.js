const express = require('express');
const { join } = require('path') 
const { path } = require('path')
var dotenv = require('dotenv').config()
const cors = require('cors')
const { makeExecutableSchema } = require('graphql-tools');
const {readFileSync} = require('fs') //This read the graphQl File (Queries)
const { ApolloServer, gql } = require('apollo-server');

//Importing Resolvers
const resolvers = require('./graphql/resolvers')

//Express Server

const app = express()

//Cors Middleware | Api Permissions

app.use(cors())

//GraphQl const

const typeDefs = readFileSync(join(__dirname, 'graphql', 'schema.graphql'), 'utf-8') //Search schemma

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => ({
        auth: req.headers.authorization || 'nothing',
    })
  })

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
}); 