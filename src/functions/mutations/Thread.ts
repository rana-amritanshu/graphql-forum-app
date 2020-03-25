import { ThreadQuery, Thread, CreateThread, UpdateThreadInput } from "../../Interfaces/Thread"
import { Context } from "../../Interfaces/GraphQL"
import { AuthUser } from "../../Interfaces/Auth"
import { auth } from "../auth/verify"

export const createThread = async (parent: any, { topic, data }: CreateThread, { prisma, request }: Context, info: any) => {
    const user: AuthUser = await auth(request)

    const topicExists: boolean = await prisma.exists.Topic({
        id: topic
    })

    if (!topicExists) {
        throw new Error("Topic could not be found")
    }

    const thread: Thread = await prisma.mutation.createThread({
        data: {
            ...data,
            topic: {
                connect: {
                    id: topic
                }
            },
            user: {
                connect: {
                    id: user.id
                }
            }
        }
    }, info)

    return thread
}

export const updateThread = async (parent: any, { id, data }: UpdateThreadInput, { prisma, request }: Context, info: any): Promise<Thread> => {
    const user: AuthUser = await auth(request)
    const threadExist: boolean = await prisma.exists.Thread({
        id,
        user: {
            id: user.id
        }
    })

    if (!threadExist) {
        throw new Error("Thread could not be updated")
    }

    return prisma.mutation.updateThread({ where: { id }, data }, info)
}

export const deleteThread = async (parent: any, {id}: {id: String}, { prisma, request }: Context, info: any): Promise<Thread> => {
    const user: AuthUser = await auth(request)

    const threadExist: boolean = await prisma.exists.Thread({
        id,
        user: {
            id: user.id
        }
    })

    if (!threadExist) {
        throw new Error("Thread could not be deleted")
    }

    return prisma.mutation.deleteThread({ where: { id }}, info)
}
