const express = require('express');
const { join } = require('path') 
var dotenv = require('dotenv').config()
const cors = require('cors')
const {readFileSync} = require('fs') //This read the graphQl File (Queries)
const { ApolloServer, gql } = require('apollo-server-express');
const MongoConection = require('./db/db')
var Grid = require('gridfs-stream');
var mongo = require('mongodb');
const { ObjectID } = require('mongodb')

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

server.applyMiddleware({ //Apply the graphql server as a middleware
    app, 
    path: '/api'
})

//Image serve

app.get('/images/:id', async function (req, res) {
    let Database = await MongoConection()
    let gfs = Grid(Database, mongo)

    let read = gfs.createReadStream({ //Render the image
        _id: req.params.id
    })
    res.set('Content-Type', 'image/jpg')
    read.pipe(res)
});

app.listen({port: 4000,}, () =>{console.log("Server Ready at 4000")})

