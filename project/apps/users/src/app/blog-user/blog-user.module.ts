import { Module } from '@nestjs/common';
import { BlogUserController } from './blog-user.controller';
import { BlogUserService } from './blog-user.service';
import { UserRepositoryModule } from 'libs/repositories/user-repository/src/lib/user-repository.module';

@Module({
  imports: [UserRepositoryModule],
  controllers: [BlogUserController],
  providers: [BlogUserService],
})
export class BlogUserModule {}
