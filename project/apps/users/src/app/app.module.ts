import { Module } from '@nestjs/common';
import { ConfigUsersModule, getMongooseOptions } from '@project/config/config-users';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigUsersModule,
    MongooseModule.forRootAsync(
      getMongooseOptions()
    ),
     ],
  controllers: [],
  providers: [],
})
export class AppModule {}
