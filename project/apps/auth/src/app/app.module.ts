import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongooseOptions } from 'libs/config/config-users/src/lib/get-mongoose-options';
import { ConfigUsersModule } from 'libs/config/config-users/src/lib/config-users.module'

@Module({
  imports: [
    ConfigUsersModule,
    MongooseModule.forRootAsync(
      getMongooseOptions(),
    )
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
