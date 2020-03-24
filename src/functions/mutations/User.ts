import { CreateUserMutation, CreateUser } from "../../Interfaces/User"
import { Context } from "../../Interfaces/GraphQL"
import {sign} from 'jsonwebtoken'
import {hash} from 'bcrypt'


export const createUser = async (parent: any, args: any, {prisma}: Context, info:any): Promise<CreateUserMutation> => {
    let password: string = args.data.password
    password = await hash(password, 10)
    let user: CreateUser = await prisma.mutation.createUser({
        data: {
            ...args.data,
            password
        }
    }, '{id name email password createdAt updatedAt}')

    let token: string = sign({subject: user.id, name: user.name, email: user.email}, process.env.JWT_SECRET, {
        expiresIn: `30 days`
    })

    return {
        data: user,
        token
    }
}