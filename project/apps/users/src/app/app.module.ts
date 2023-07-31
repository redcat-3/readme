import { Module } from '@nestjs/common';
import { BlogUserModule } from './blog-user/blog-user.module';
import { ConfigUsersModule } from '@project/config/config-users';
import { AuthenticationModule } from '../../../auth/src/app//authentication/authentication.module';
import { UserMemoryModule } from 'libs/repositories/user-repository/src/lib/user-memory.module';

@Module({
  imports: [
    BlogUserModule,
    AuthenticationModule,
    ConfigUsersModule,
    UserMemoryModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
