import { Injectable } from '@nestjs/common';
import { PostMemoryRepository } from './post-memory.repository';
import { CreatePostDto } from './dto/create-post.dto';
import { PostEntity } from './post.entity';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
  constructor(
    private readonly postRepository: PostMemoryRepository
  ) {
  }
  public async create(dto: CreatePostDto) {
    const postEntity = new PostEntity(dto);

    return this.postRepository
      .create(postEntity);
  }

  public async getPost(id: string) {
    return this.postRepository.findById(id);
  }

  public async findByTitle() {
    return this.postRepository.findByTitle();
  }

  public async updatePost(id: string, dto: UpdatePostDto) {
    const update = new PostEntity(dto);
    return this.postRepository.update(id, update);
  }

  public async delete(id: string) {
    return this.postRepository.destroy(id);
  }

  public async likeChange() {
    return;
  }

  public async findByUser() {
    return;
  }

  public async repost() {
    return;
  }
}
