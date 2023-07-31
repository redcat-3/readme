import { Injectable } from '@nestjs/common';
import { UserMemoryRepository } from '../../../../../libs/repositories/user-repository/src/lib/user-memory.repository';

@Injectable()
export class BlogUserService {
  constructor(
    private readonly userRepository: UserMemoryRepository
  ) {
  }

  public async findByEmail(email: string) {
    return await this.userRepository.findByEmail(email);
  }

  public async getFollowUsers() {
    return;
  }

  public async followUser(id: string) {
    return id;
  }

  public async getUserDetails(id: string) {
    return this.userRepository.findById(id);
  }
}
