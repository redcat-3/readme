import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { PrismaModule } from '../prisma/prisma.module';
import { CommentModule } from '../comment/comment.module';

@Module({
  imports: [PrismaModule, CommentModule],
  controllers: [PostController],
  providers: [PostService]
})
export class PostModule {}
