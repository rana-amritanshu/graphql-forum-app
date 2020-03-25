import { ReplyQuery, Reply, CreateReply, UpdateReplyInput } from "../../Interfaces/Reply"
import { Context } from "../../Interfaces/GraphQL"
import { AuthUser } from "../../Interfaces/Auth"
import { auth } from "../auth/verify"

export const createReply = async (parent: any, { thread, data }: CreateReply, { prisma, request }: Context, info: any) => {
    const user: AuthUser = await auth(request)

    const threadExists: boolean = await prisma.exists.Thread({
        id: thread
    })

    if (!threadExists) {
        throw new Error("Topic could not be found")
    }

    const reply: Reply = await prisma.mutation.createReply({
        data: {
            ...data,
            thread: {
                connect: {
                    id: thread
                }
            },
            user: {
                connect: {
                    id: user.id
                }
            }
        }
    }, info)

    return reply
}

export const updateReply = async (parent: any, { id, data }: UpdateReplyInput, { prisma, request }: Context, info: any): Promise<Reply> => {
    const user: AuthUser = await auth(request)
    const replyExists: boolean = await prisma.exists.Reply({
        id,
        user: {
            id: user.id
        }
    })

    console.log(replyExists)

    if (!replyExists) {
        throw new Error("Reply could not be updated")
    }

    return prisma.mutation.updateReply({ where: { id }, data }, info)
}

export const deleteReply = async (parent: any, {id}: {id: String}, { prisma, request }: Context, info: any): Promise<Reply> => {
    const user: AuthUser = await auth(request)

    const replyExists: boolean = await prisma.exists.Reply({
        id,
        user: {
            id: user.id
        }
    })

    if (!replyExists) {
        throw new Error("Reply could not be deleted")
    }

    return prisma.mutation.deleteReply({ where: { id }}, info)
}
