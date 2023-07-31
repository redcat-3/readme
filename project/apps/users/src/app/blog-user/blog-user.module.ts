import { Module } from '@nestjs/common';
import { UserMemoryModule } from '../../../../../libs/repositories/user-repository/src/lib/user-memory.module';
import { BlogUserController } from './blog-user.controller';
import { BlogUserService } from './blog-user.service';

@Module({
  imports: [UserMemoryModule],
  controllers: [BlogUserController],
  providers: [BlogUserService],
})
export class BlogUserModule {}
