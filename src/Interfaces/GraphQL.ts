import { Prisma } from "prisma-binding";

export interface Context {
    prisma?: Prisma,
    request?: any
}