import {sign} from 'jsonwebtoken'
import {hash} from 'bcrypt'
import {Prisma} from 'prisma-binding'

export default {
    async createUser(parent: any, args: any, {prisma}: {prisma: Prisma}, info:any) {
        let password: string = args.data.password
        password = await hash(password, 10)
        let user = await prisma.mutation.createUser({
            data: {
                ...args.data,
                password
            }
        }, '{id name email password createdAt updatedAt}')

        let token: string = sign({subject: user.id}, process.env.JWT_SECRET, {
            expiresIn: `30 days`
        });

        return {
            data: user,
            token
        }
    }
}