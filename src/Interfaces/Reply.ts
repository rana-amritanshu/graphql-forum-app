import {Query} from './Query'


export interface CreateReplyInput {
    text: String
}

export interface CreateReply {
    thread: String,
    data: CreateReplyInput
}

export interface Reply {
    id?: String,
    text?: String,
    createdAt?: String,
    updatedAt?: String
}

export interface UpdateReplyInput {
    id: String
    data: UpdateReply
}

export interface UpdateReply {
    text?: String
}

export interface ReplyQuery extends Query{
    query?: String,
    user?: String,
    thread: String,
    orderBy?: ReplyOrderBy
}

enum ReplyOrderBy{
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    text_ASC = "text_ASC",
    text_DESC = "text_DESC",
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC"
}
