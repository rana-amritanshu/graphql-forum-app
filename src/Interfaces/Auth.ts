export interface LoginArgs {
    email: string,
    password: string
}

export interface AuthUser {
    id: String,
    email: String,
    name?: String
}