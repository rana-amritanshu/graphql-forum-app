import { Topic, UpdateTopicInput } from "../../Interfaces/Topic";
import { AuthUser } from "../../Interfaces/Auth";
import { auth } from "../auth/verify";
import { Context } from "../../Interfaces/GraphQL";

export const createTopic = async (parent: any, args: any, { prisma, request }: Context, info: any): Promise<Topic> => {
    const user: AuthUser = await auth(request)

    let topic: Topic = await prisma.mutation.createTopic({
        data: {
            ...args.data,
            user: {
                connect: {
                    id: user.id
                }
            }
        }
    }, info)

    return topic;
}

export const updateTopic = async (parent: any, { id, data }: UpdateTopicInput, { prisma, request }: Context, info: any): Promise<Topic> => {
    const user: AuthUser = await auth(request)
    const topicExists: boolean = await prisma.exists.Topic({
        id,
        user: {
            id: user.id
        }
    })

    if (!topicExists) {
        throw new Error("Topic could not be updated")
    }

    return prisma.mutation.updateTopic({ where: { id }, data }, info)
}

export const deleteTopic = async (parent: any, {id}: {id: String}, { prisma, request }: Context, info: any): Promise<Topic> => {
    const user: AuthUser = await auth(request)

    const topicExists: boolean = await prisma.exists.Topic({
        id,
        user: {
            id: user.id
        }
    })

    if (!topicExists) {
        throw new Error("Topic could not be deleted")
    }

    return prisma.mutation.deleteTopic({ where: { id }}, info)
}