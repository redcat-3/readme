import { Injectable } from '@nestjs/common';
import { PostRepository } from './post-memory.repository';
import { CreatePostDto } from './dto/create-post.dto';
import { PostEntity } from './post.entity';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from '@prisma/client';

@Injectable()
export class PostService {
  constructor(
    private readonly postRepository: PostRepository
  ) {
  }
  async createPost(dto: CreatePostDto): Promise<Post> {
    const postEntity = new PostEntity({ ...dto, comments: [] });
    return this.postRepository.create(postEntity);
  }

  async deletePost(id: number): Promise<void> {
    this.postRepository.destroy(id);
  }

  async getPost(id: number): Promise<Post> {
    return this.postRepository.findById(id);
  }

  async getPosts(): Promise<Post[]> {
    return this.postRepository.find();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async updatePost(_id: number, _dto: UpdatePostDto): Promise<Post> {
    throw new Error('Not implemented…');
  }

}
