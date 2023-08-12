import { Module } from '@nestjs/common';
import { AuthenticationModule } from './authentication/authentication.module';
import { BlogUserEntity } from '../../../users/src/app/blog-user/blog-user.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongooseOptions } from 'libs/config/config-users/src/lib/get-mongoose-options';
import { BlogUserModel, BlogUserSchema } from 'apps/users/src/app/blog-user/blog-user.model';
import { UserRepositoryModule } from 'libs/repositories/user-repository/src/lib/user-repository.module';

@Module({
  imports: [
    AuthenticationModule,
    BlogUserEntity,
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
  controllers: [],
  providers: [],
})
export class AppModule {}
