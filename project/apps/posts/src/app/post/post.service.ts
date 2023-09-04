import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PostRepository } from './post.repository';
import { DEFAULT_AMOUNT, PostsError } from './post.constant';
import { CreatePostDto, UpdatePostDto } from '@project/shared/shared-dto';
import { TypeEntityAdapter } from './utils/entity-adapter';
import { PostStatus } from '@prisma/client';
import { getDate } from './utils/helpers';

@Injectable()
export class PostService {
  constructor(
    private readonly PostRepository: PostRepository,
  ) { }

  public async create(dto: CreatePostDto, userId: string) {
    const Post = {
      ...dto,
      _userId: userId,
      createdDate: getDate(),
      postedDate: getDate(),
      status: PostStatus.published,
      likesCount: DEFAULT_AMOUNT,
      commentsCount: DEFAULT_AMOUNT,
      isReposted: false,
    };
    const postEntity = await new TypeEntityAdapter[Post.type](Post);
    return this.PostRepository.create(postEntity);
  }

  public async update(postId: number, dto: UpdatePostDto, userId: string) {
    const Post = await this.findByPostId(postId);
    if (userId !== Post._userId) {
      throw new BadRequestException(PostsError.NotUserAuthor)
    }
    const updatedPost = { ...Post, ...dto, postedDate: getDate() }
    const postEntity = await new TypeEntityAdapter[updatedPost.type](updatedPost);
    return this.PostRepository.update(postId, postEntity);
  }

  public async findByPostId(id: number) {
    const Post = await this.PostRepository.findById(id);
    if (!Post) {
      throw new NotFoundException(PostsError.PostNotFound);
    }
    return Post;
  }

  public async repost(id: number, userId: string) {
    const originalPost = await this.findByPostId(id);
    const isAlreadyReposted = await this.PostRepository.findRepost(id, userId)
    if (isAlreadyReposted) {
      throw new BadRequestException(PostsError.AlreadyReposted)
    }
    const Post = {
      ...originalPost as CreatePostDto,
      isReposted: true,
      _userId: userId,
      _originUserId: originalPost._userId,
      _originId: originalPost._id,
      postedDate: getDate(),
      likesCount: DEFAULT_AMOUNT,
      commentsCount: DEFAULT_AMOUNT,
    };
    const postEntity = await new TypeEntityAdapter[Post.type](Post);
    return this.PostRepository.create(postEntity);
  }

  public async remove(postId: number, userId: string) {
    const Post = await this.findByPostId(postId);
    if (userId !== Post._userId) {
      throw new BadRequestException(PostsError.NotUserAuthor)
    }
    return this.PostRepository.destroy(postId);
  }

}
