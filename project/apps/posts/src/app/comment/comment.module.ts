import { Module } from '@nestjs/common';
import { CommentController } from './comments.controller';
import { CommentService } from './comment.service';
import { CommentRepository } from './comment.repository';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtAccessStrategy, getJwtOptions } from '@project/util/util-core';
import { PrismaModule } from '../prisma/prisma.module';
@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: getJwtOptions
    }),
    PrismaModule
  ],
  controllers: [CommentController],
  providers: [CommentService, CommentRepository, JwtAccessStrategy],
  exports: [CommentRepository],
})
export class CommentModule { }
