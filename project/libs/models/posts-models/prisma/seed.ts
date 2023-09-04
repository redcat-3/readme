import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function fillDb() {
  await prisma.post.upsert({
    where: { postId: 1 },
    update: {},
    create: {
      userId:'1',
      type: 'text',
      title: 'Title test',
      announcement: 'test test',
      text: 'Long text',
      status: 'published',
      likesCount:1,
      commentsCount:0,
      likes: {
        create: [
          {
            likedByUsersIds: ['2']
          }
        ]
      }
    }
  });
  await prisma.post.upsert({
    where: { postId: 2 },
    update: {},
    create: {
      userId:'1',
      type: 'text',
      title: 'Title test 2',
      announcement: 'Announcement',
      text: 'Long text for post 2',
      status: 'published',
      likesCount:0,
      commentsCount:1,
      comments: {
        create: [
          {
            userId: '2',
            text: 'comment'
          },
        ]
      },
    }
  });

  console.info('Database was filled')
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
