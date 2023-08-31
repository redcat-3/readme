import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongooseOptions } from 'libs/config/config-users/src/lib/get-mongoose-options';
import { ConfigUsersModule } from 'libs/config/config-users/src/lib/config-users.module';
import { NotifyModule } from './authentication/notify/notify.module';

@Module({
  imports: [
    ConfigUsersModule,
    NotifyModule,
    MongooseModule.forRootAsync(
      getMongooseOptions(),
    )
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
