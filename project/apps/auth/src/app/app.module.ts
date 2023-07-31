import { Module } from '@nestjs/common';
import { AuthenticationModule } from './authentication/authentication.module';
import { BlogUserEntity } from '../../../users/src/app/blog-user/blog-user.entity';

@Module({
  imports: [AuthenticationModule, BlogUserEntity],
  controllers: [],
  providers: [],
})
export class AppModule {}
