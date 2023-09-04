import { CRUDRepository } from '@project/util/util-types';
import { Post, PostStatus, PostType } from '@project/shared/app-types';
import { PostQuery, SearchPostsQuery } from '@project/shared/shared-queries';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { adaptPrismaPost } from './utils/adapt-prisma-post';
import { PostEntity } from './entity/post.entity';
import { formatTags } from './utils/helpers';

@Injectable()
export class PostRepository implements CRUDRepository<PostEntity, number, Post> {
  constructor(private readonly prisma: PrismaService) { }

  public async create(item: PostEntity): Promise<Post> {
    const data = {
      ...item.toObject(),
      userId: item._userId,
      originUserId: item._originUserId,
      originId: item._originId,
    }
    if(item.tags){
      data.tags = formatTags(item.tags)
    }
    delete data._userId;
    delete data._originUserId;
    delete data._id;
    delete data._originId;
    const post = await this.prisma.post.create({ data });
    return adaptPrismaPost(post)
  }

  public async findById(postId: number): Promise<Post | null> {
    const Post = await this.prisma.post.findFirst({
      where: {
        postId
      },
      include: {
        comments: true,
        likes: true,
      },
    });
    return adaptPrismaPost(Post)
  }

  public async findRepost(postId: number, userId:string): Promise<Post | null> {
    const Post = await this.prisma.post.findFirst({
      where: {
      AND:{
        originId: postId,
        userId
      }},
      include: {
        comments: true,
        likes: true,
      },
    });
    return adaptPrismaPost(Post)
  }

  public async findAll({ limit, page, sortBy, type, sortDirection, user, tag }: PostQuery): Promise<BlogPost[]> {
    const queryParams = {
      where: {
        AND: {
          status: PostStatus.Posted,
          type: type as PostType,
          userId: user,
          tags:undefined
        }
      },
      take: limit,
      include: {
        comments: true,
        likes: true,
      },
      orderBy: [
        { [sortBy]: sortDirection }
      ],
      skip: page > 0 ? limit * (page - 1) : undefined,
    }
    if (tag) {
      queryParams.where.AND.tags = { has: tag };
    }
    const Posts = await this.prisma.post.findMany(queryParams);
    return Posts.map((Post) => adaptPrismaPost(Post))
  }

  public async getFullList(): Promise<Post[]> {
    const Posts = await this.prisma.post.findMany({
      where: {
          status: PostStatus.Posted
      },
      include: {
        comments: true,
        likes: true,
      },
    });
    return Posts.map((Post) => adaptPrismaPost(Post))
  }

  public async searchByTitle({ title, limit }: SearchPostsQuery): Promise<Post[]> {
    const Posts = await this.prisma.post.findMany({
      where: {
        AND: {
          status: PostStatus.Posted,
          title: {
            search: title.split(" ").join(" & ")
          }
        }
      },
      take: limit,
      include: {
        comments: true,
        likes: true,
      },
    });
    return Posts.map((Post) => adaptPrismaPost(Post))
  }

  public async findDrafts(userId: string): Promise<Post[]> {
    const Posts = await this.prisma.post.findMany({
      where: {
        AND: {
          status: PostStatus.Draft,
          userId: userId,
        }
      },
      include: {
        comments: true,
        likes: true,
      }
    });
    return Posts.map((Post) => adaptPrismaPost(Post))
  }

  public async update(postId: number, item: PostEntity): Promise<Post> {
    const data = {
      ...item.toObject(),
      tags:formatTags(item.tags),
      userId: item._userId,
      originUserId: item._originUserId
    }
    delete data._id;
    delete data._userId;
    delete data._originUserId;

    const Post = await this.prisma.post.update({
      where: { postId },
      data,
      include: {
        comments: true,
        likes: true,
      }
    });
    return adaptPrismaPost(Post)
  }

  public async destroy(postId: number): Promise<void> {
    await this.prisma.post.delete({ where: { postId } });
  }
}
