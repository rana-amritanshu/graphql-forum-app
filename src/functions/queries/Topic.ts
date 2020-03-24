import { TopicQuery, Topic } from "../../Interfaces/Topic"
import { Context } from "../../Interfaces/GraphQL"

export const topics = async (parent: any, args: TopicQuery, { prisma, request }: Context, info): Promise<[Topic]> => {
    let queryArgs: any = {}
    let userArgs: any = {}
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

    let operations = {...args}
    delete operations.query
    delete operations.user

    const topics = await prisma.query.topics({ where: { ...queryArgs, ...userArgs }, ...operations }, info)

    return topics
}