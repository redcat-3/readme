import { CRUDRepository } from '@project/util/util-types';
import { PostEntity } from './post.entity';
import { Post } from '@project/shared/app-types';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PostRepository implements CRUDRepository<PostEntity, number, Post> {
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: PostEntity): Promise<Post> {
    const entityData = item.toObject();
    return this.prisma.post.create({
      data: {
        ...entityData,
        comments: {
          connect: []
        }
      },
      include: {
        comments: true,
      }
    });
  }

  public async destroy(postId: number): Promise<void> {
    await this.prisma.post.delete({
      where: {
        postId,
      }
    });
  }

  public async findById(postId: number): Promise<Post | null> {
    return this.prisma.post.findFirst({
      where: {
        postId
      },
      include: {
        comments: true
      }
    });
  }

  public find(): Promise<Post[]> {
    return this.prisma.post.findMany({
      include: {
        comments: true
      }
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public update(postId: number, _item: PostEntity): Promise<Post> {
    return Promise.resolve(undefined);
  }
}
