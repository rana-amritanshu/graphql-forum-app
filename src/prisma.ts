import {Prisma} from 'prisma-binding'

const prisma: Prisma = new Prisma({
    typeDefs: `generated/prisma.graphql`,
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET
})

export default prisma;
