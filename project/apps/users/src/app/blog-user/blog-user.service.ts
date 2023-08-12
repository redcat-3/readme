import { Injectable, Inject } from '@nestjs/common';
import { UserRepository } from '../../../../../libs/repositories/user-repository/src/lib/user.repository';
import { ConfigType } from '@nestjs/config';
import { dbConfig } from '@project/config/config-users';

@Injectable()
export class BlogUserService {
  constructor(
    private readonly userRepository: UserRepository,

    @Inject(dbConfig.KEY)
    private readonly databaseConfig: ConfigType<typeof dbConfig>,
  ) {
    console.log(databaseConfig.host);
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
