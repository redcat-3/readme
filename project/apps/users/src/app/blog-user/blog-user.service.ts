import { Injectable } from '@nestjs/common';
import { BlogUserMemoryRepository } from './blog-user-memory.repository';

@Injectable()
export class BlogUserService {
  constructor(
    private readonly blogUserRepository: BlogUserMemoryRepository
  ) {
  }

  public async getFollowUsers() {
    return;
  }

  public async followUser(id: string) {
    return id;
  }

  public async getUserDetails(id: string) {
    return this.blogUserRepository.findById(id);
  }
}
