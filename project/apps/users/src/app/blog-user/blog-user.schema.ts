import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema({
  timestamps: true,
  collection: 'users',
})
export class User {
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

export const UserSchema = SchemaFactory.createForClass(User);
