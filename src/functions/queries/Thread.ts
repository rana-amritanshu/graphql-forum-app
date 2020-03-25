import { ThreadQuery, Thread } from "../../Interfaces/Thread"
import { Context } from "../../Interfaces/GraphQL"

export const threads = async (parent: any, args: ThreadQuery, { prisma, request }: Context, info): Promise<[Thread]> => {
    let queryArgs: any = {}
    let userArgs: any = {}
    let topicArgs: any = {}
    if (!!args.query) {
        queryArgs = {
            OR: [{
                title_contains: args.query
            }, {
                body_contains: args.query
            }]
        }
    }

    if (!!args.user) {
        userArgs = { user: { id: args.user } }
    }
    if (!!args.topic) {
        topicArgs = { topic: { id: args.topic } }
    }

    let operations = {...args}
    delete operations.query
    delete operations.user
    delete operations.topic

    const threads = await prisma.query.threads({ where: { ...queryArgs, ...userArgs, ...topicArgs }, ...operations }, info)

    return threads
}