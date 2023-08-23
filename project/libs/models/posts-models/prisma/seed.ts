import { PrismaClient } from '@prisma/client';
import { process } from 'process';

const prisma = new PrismaClient();

async function fillDb() {
  await prisma.post.upsert({
    where: { postId: 1 },
    update: {},
    create: {
      title: 'Книги',
      author: '13',
      content: 'Недавно прочитал страшный роман «Худеющий».',
      status: 'DRAFT',
      likesCount: 0,
      repost: false,
      type: 'TEXT'
    },
  });
  await prisma.post.upsert({
    where: { postId: 2 },
    update: {},
    create: {
      title: 'Первый PC',
      author: '13',
      content: 'Первый PC появился в 2000-м году.',
      status: 'DRAFT',
      likesCount: 0,
      repost: false,
      type: 'TEXT'
    }
  });
  console.info('🤘️ Database was filled')
}

fillDb()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect()

    process.exit(1);
  })
