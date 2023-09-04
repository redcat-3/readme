import { Module } from '@nestjs/common';
import { UserRepository } from '../../../../../apps/users/src/app/blog-user/blog-user.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogUserModel, BlogUserSchema } from '../../../../../apps/users/src/app/blog-user/blog-user.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BlogUserModel.name, schema: BlogUserSchema },
    ]),
  ],
  providers: [UserRepository],
  exports: [UserRepository]
})
export class UserRepositoryModule {}
