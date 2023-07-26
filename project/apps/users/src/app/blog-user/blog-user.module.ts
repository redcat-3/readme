import { Module } from '@nestjs/common';
import { BlogUserMemoryRepository } from './blog-user-memory.repository';
import { BlogUserController } from './blog-user.controller';
import { BlogUserService } from './blog-user.service';

@Module({
  providers: [BlogUserMemoryRepository, BlogUserService],
  exports: [BlogUserMemoryRepository],
  controllers: [BlogUserController],
})
export class BlogUserModule {}
