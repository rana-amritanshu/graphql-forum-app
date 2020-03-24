import {verify, decode} from 'jsonwebtoken'
import { AuthUser } from '../../Interfaces/Auth'

const jwtVerify: Function = (token) : Promise<AuthUser> => {
    return new Promise((resolve, reject) => {
        verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                console.log(err)
                throw new Error("Unauthorized access")
            }
            resolve({
                id: decoded.subject,
                email: decoded.email,
                name: decoded.name
            })
        })
    })
}

export const auth: Function = async ({request}): Promise<AuthUser> => {
    const token: String = request.headers.authorization.replace("Bearer ", "")
    const user: AuthUser = await jwtVerify(token)
    return user
}