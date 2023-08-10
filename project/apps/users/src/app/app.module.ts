import { Module } from '@nestjs/common';
import { BlogUserModule } from './blog-user/blog-user.module';
import { AuthenticationModule } from '../../../auth/src/app//authentication/authentication.module';
import { UserRepositoryModule } from 'libs/repositories/user-repository/src/lib/user-repository.module';
import { ConfigUsersModule, getMongooseOptions } from '@project/config/config-users';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './blog-user/blog-user.schema';
import { BlogUserController } from './blog-user/blog-user.controller';

@Module({
  imports: [
    BlogUserModule,
    AuthenticationModule,
    ConfigUsersModule,
    UserRepositoryModule,
    MongooseModule.forRootAsync(
      getMongooseOptions(),
    ),
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [BlogUserController],
  providers: [],
})
export class AppModule {}
