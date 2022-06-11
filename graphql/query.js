const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')
const express = require('express')

const router = express.Router()

let schema = buildSchema(`
    type Query {
        hello: String
    }
`)

let root = {
    hello: () => {
        return 'Welcome to GraphQL'
    }
}

module.exports = graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
})