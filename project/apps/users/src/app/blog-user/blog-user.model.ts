import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from '@project/shared/app-types';

@Schema({
  collection: 'users',
  timestamps: true,
})
export class BlogUserModel extends Document implements User {
  @Prop()
  public avatar: string;

  @Prop({
    required: true,
    unique: true,
  })
  public email: string;

  @Prop({
    required: true,
  })
  public name: string;

  @Prop({
    required: true,
  })
  public passwordHash: string;

  @Prop({
    required: true,
  })
  public posts: string[];

  @Prop({
    required: true,
  })
  public followUsers: string[];

  @Prop({
    required: true,
  })
  public createdAt: Date;

  @Prop({
    required: false,
  })
  public updateAt: Date;

  @Prop({
    required: false,
  })
  public likedPost: string[];
}

export const BlogUserSchema = SchemaFactory.createForClass(BlogUserModel);
