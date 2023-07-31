import { Module } from '@nestjs/common';
import { UserMemoryRepository } from '../../../../../libs/repositories/user-repository/src/lib/user-memory.repository';

@Module({
  imports: [],
  providers: [UserMemoryRepository],
  exports: [UserMemoryRepository]
})
export class UserMemoryModule {}
