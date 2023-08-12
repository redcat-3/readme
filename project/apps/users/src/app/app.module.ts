import { Module } from '@nestjs/common';
import { BlogUserModule } from './blog-user/blog-user.module';
import { AuthenticationModule } from '../../../auth/src/app//authentication/authentication.module';
import { UserRepositoryModule } from 'libs/repositories/user-repository/src/lib/user-repository.module';
import { ConfigUsersModule, getMongooseOptions } from '@project/config/config-users';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogUserController } from './blog-user/blog-user.controller';
import { BlogUserModel, BlogUserSchema } from './blog-user/blog-user.model';

@Module({
  imports: [
    BlogUserModule,
    AuthenticationModule,
    ConfigUsersModule,
    UserRepositoryModule,
    MongooseModule.forRootAsync(
      getMongooseOptions(),
    ),
    MongooseModule.forFeatureAsync([
      {
        name: BlogUserModel.name,
        useFactory: () => {
          const schema = BlogUserSchema;
          schema.pre('save', function () {
            console.log('Hello from pre save');
          });
          return schema;
        },
      }
    ]),
  ],
  controllers: [BlogUserController],
  providers: [UserRepositoryModule,],
})
export class AppModule {}
