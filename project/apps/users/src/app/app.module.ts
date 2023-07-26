import { Module } from '@nestjs/common';
import { BlogUserModule } from './blog-user/blog-user.module';
import { UserController } from './user/user.controller';

@Module({
  imports: [BlogUserModule],
  controllers: [UserController],
  providers: [],
})
export class AppModule {}
