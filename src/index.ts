import {config as dotenv} from 'dotenv'
dotenv({path: __dirname + `/../${process.env.ENVFILE}`})

import {GraphQLServer, PubSub} from 'graphql-yoga'
import prisma from './prisma'
import Mutation from './resolvers/Mutation'
import Query from './resolvers/Query'

const pubsub = new PubSub()

const server: GraphQLServer = new GraphQLServer({
    typeDefs: './schema/schema.graphql',
    resolvers: {
        Mutation,
        Query
    },
    context: {
        pubsub,
        prisma
    }
})

server.start(() => {
    console.log("GraphQL server is up & running")
})

