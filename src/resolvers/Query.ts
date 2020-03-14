import {sign} from 'jsonwebtoken'
import {compare} from 'bcrypt'
import {Prisma} from 'prisma-binding'
import { LoginArgs } from '../Interfaces/Auth'

export default {
    async login(parent: any, {email, password}: LoginArgs, {prisma}: {prisma: Prisma}, info: any) {
        const user = await prisma.query.user({
            where: {email}
        }, '{id name email password createdAt updatedAt}')

        if (!user) {
            throw new Error('Please check your credentials')
        }

        let passwordMatches = await compare(password, user.password);

        if (!passwordMatches) {
            throw new Error('Please check your credentials')
        }

        let token: string = sign({subject: user.id}, process.env.JWT_SECRET, {
            expiresIn: `30 days`
        });

        return {
            data: user,
            token
        }
    }
}
