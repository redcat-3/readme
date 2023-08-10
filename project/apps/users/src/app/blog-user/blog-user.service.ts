import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../../../../libs/repositories/user-repository/src/lib/user.repository';

@Injectable()
export class BlogUserService {
  constructor(
    private readonly userRepository: UserRepository
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
