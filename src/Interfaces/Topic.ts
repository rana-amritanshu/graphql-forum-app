import {Query} from './Query'

export interface CreateTopic {
    id: String,
    title: String,
    body: String,
    createdAt: String,
    updatedAt: String
}

export interface Topic {
    id?: String,
    title?: String,
    body?: String,
    createdAt?: String,
    updatedAt?: String
}

export interface UpdateTopicInput {
    id: String
    data: UpdateTopic
}

export interface UpdateTopic {
    title?: String,
    body?: String
}

export interface TopicQuery extends Query{
    query?: String,
    user?: String,
    orderBy?: TopicOrderBy
}

enum TopicOrderBy{
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
