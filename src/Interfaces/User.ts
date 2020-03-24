import {Topic} from './Topic'

export interface CreateUser {
    id: String,
    name: String,
    email: String,
    password: String,
    createdAt: String,
    updatedAt: String
    topics?: [Topic?]
}

export interface CreateUserMutation {
    data: CreateUser,
    token: String
}
