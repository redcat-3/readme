import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { PostRepository } from './post.repository';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtAccessStrategy, getJwtOptions } from '@project/util/util-core';
import { PrismaModule } from '../prisma/prisma.module';
@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: getJwtOptions,
    }),
    PrismaModule
  ],
  controllers: [PostController],
  providers: [PostService, PostRepository, JwtAccessStrategy],
  exports: [PostRepository],
})
export class PostModule {}
