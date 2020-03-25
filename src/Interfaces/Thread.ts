import {Query} from './Query'


export interface CreateThreadInput {
    title: String,
    body: String,
}

export interface CreateThread {
    topic: String,
    data: CreateThreadInput
}

export interface Thread {
    id?: String,
    title?: String,
    body?: String,
    createdAt?: String,
    updatedAt?: String
}

export interface UpdateThreadInput {
    id: String
    data: UpdateThread
}

export interface UpdateThread {
    title?: String,
    body?: String
}

export interface ThreadQuery extends Query{
    query?: String,
    user?: String,
    topic?: String,
    orderBy?: ThreadOrderBy
}

enum ThreadOrderBy{
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    title_ASC = "title_ASC",
    title_DESC = "title_DESC",
    body_ASC = "body_ASC",
    body_DESC = "body_DESC",
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC"
}
