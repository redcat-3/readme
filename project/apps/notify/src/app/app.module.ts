import { Module } from '@nestjs/common';
import { EmailSubscriberModule } from './email-subscriber/email-subscriber.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigNotifyModule } from '@project/config/config-notify';
import { getMailerAsyncOptions, getMongooseOptions } from '@project/util/util-core';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    ConfigNotifyModule,
    MongooseModule.forRootAsync(getMongooseOptions('application.db')),
    EmailSubscriberModule,
    MailerModule.forRootAsync(getMailerAsyncOptions('application.mail')),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
