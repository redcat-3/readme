import { Module } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongooseOptions } from '@project/config/config-users';
import { BlogUserModel, BlogUserSchema } from '../../../../../apps/users/src/app/blog-user/blog-user.model';

@Module({
  imports: [
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
  providers: [UserRepository],
  exports: [UserRepository]
})
export class UserRepositoryModule {}
