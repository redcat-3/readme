import { Module } from '@nestjs/common';
import { ConfigUploaderModule, getMongooseOptions } from '@project/config/config-uploader';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    ConfigUploaderModule,
    MongooseModule.forRootAsync(
      getMongooseOptions()
    )
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
