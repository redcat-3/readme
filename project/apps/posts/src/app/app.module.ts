import { Module } from '@nestjs/common';
import { ConfigPostsModule } from '@project/config/config-posts';
import { PostModule } from './post/post.module';
import { PrismaModule } from './prisma/prisma.module';
import { CommentModule } from './comment/comment.module';
import { LikeModule } from './like/like.module';
import { NotifyModule } from './notify/notify.module';

@Module({
  imports: [
    PostModule, PrismaModule, CommentModule,
    LikeModule, ConfigPostsModule, NotifyModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
