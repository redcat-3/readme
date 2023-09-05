import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { CommentRepository } from './comment.repository';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtAccessStrategy, getJwtOptions } from '@project/util/util-core';
import { PrismaModule } from '../prisma/prisma.module';
@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigService],
      useFactory: getJwtOptions,
      inject: [ConfigService],
    }),
    PrismaModule
  ],
  controllers: [CommentController],
  providers: [CommentService, CommentRepository, JwtAccessStrategy],
  exports: [CommentRepository],
})
export class CommentModule { }
