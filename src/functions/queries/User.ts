import {sign} from 'jsonwebtoken'
import {compare} from 'bcrypt'
import { LoginArgs } from '../../Interfaces/Auth'
import { Context } from "../../Interfaces/GraphQL";
import { CreateUserMutation } from '../../Interfaces/User';

export const login = async (parent: any, {email, password}: LoginArgs, {prisma}: Context, info: any): Promise<CreateUserMutation> => {
    const user = await prisma.query.user({
        where: {
            email
        }
    })
    
    if (!user) {
        throw new Error('Please check your credentials')
    }

    let passwordMatches: boolean = await compare(password, user.password);

    if (!passwordMatches) {
        throw new Error('Please check your credentials')
    }

    let token: string = sign({subject: user.id, name: user.name, email: user.email}, process.env.JWT_SECRET, {
        expiresIn: `30 days`
    })

    return {
        data: user,
        token
    }
}