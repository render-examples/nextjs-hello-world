import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const topicData: Prisma.TopicCreateInput[] = [
  {
    title: 'Frontend',

  },
  {
    title: 'Backend',

  },
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of topicData) {
    const topic = await prisma.topic.create({
      data: u,
    })
    console.log(`Created Topic with id: ${topic.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })