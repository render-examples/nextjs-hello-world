import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const createTopics = async (title:string) => {
    const user = await prisma.topic.create({
        data: {
            title: title,
        },
    })
}