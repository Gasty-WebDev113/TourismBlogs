const querys = require('../graphql/querys')
const mutations = require('../graphql/mutations')

module.exports = { //Export to be imported in the index / If you use this resolvers, you declarate this in the schema
    Query: querys,
    Mutation: mutations,
    } 
