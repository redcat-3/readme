import { Module } from '@nestjs/common';
import { LikesController } from './like.controller';
import { LikesService } from './like.service';
import { LikeRepository } from './like.repository';
import { PostModule } from '../post/post.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtAccessStrategy, getJwtOptions } from '@project/util/util-core';
@Module({
  imports: [
    PostModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: getJwtOptions,
    }),
  ],
  controllers: [LikesController],
  providers: [LikesService, LikeRepository, JwtAccessStrategy],
  exports: [LikeRepository],
})
export class LikeModule {}
