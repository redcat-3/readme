import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { UserMemoryModule } from '../../../../../libs/repositories/user-repository/src/lib/user-memory.module';

@Module({
  imports: [UserMemoryModule],
  controllers: [AuthenticationController],
  providers: [AuthenticationService],
})
export class AuthenticationModule {}
