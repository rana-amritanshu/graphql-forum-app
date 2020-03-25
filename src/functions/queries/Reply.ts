import { ReplyQuery, Reply } from "../../Interfaces/Reply"
import { Context } from "../../Interfaces/GraphQL"

export const replies = async (parent: any, args: ReplyQuery, { prisma, request }: Context, info): Promise<[Reply]> => {
    let queryArgs: any = {}
    let userArgs: any = {}
    let threadArgs: any = {}
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
    if (!!args.thread) {
        threadArgs = { thread: { id: args.thread } }
    }

    let operations = {...args}
    delete operations.query
    delete operations.user
    delete operations.thread

    const replies = await prisma.query.replies({ where: { ...queryArgs, ...userArgs, ...threadArgs }, ...operations }, info)

    return replies
}