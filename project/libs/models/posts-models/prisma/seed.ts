import { PostStatus, PostType, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function fillDb() {
  const first =  await prisma.post.upsert({
    where: { postId: 1 },
    update: {},
    create: {
      title: 'Книги',
      author: '13',
      content: 'Недавно прочитал страшный роман «Худеющий».',
      status: PostStatus.published,
      likesCount: 0,
      repost: false,
      type: PostType.text
    },
  });
  const second = await prisma.post.upsert({
    where: { postId: 2 },
    update: {},
    create: {
      title: 'Первый PC',
      author: '13',
      content: 'Первый PC появился в 2000-м году.',
      status: PostStatus.draft,
      likesCount: 0,
      repost: false,
      type: PostType.text
    }
  });
  console.log({ first, second });
  console.info('🤘️ Database was filled')
}

fillDb()
.catch(console.error)
.finally(() => prisma.$disconnect());

