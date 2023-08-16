import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { UserRepositoryModule } from '../../../../../libs/repositories/user-repository/src/lib/user-repository.module';

@Module({
  imports: [UserRepositoryModule],
  controllers: [AuthenticationController],
  providers: [AuthenticationService],
})
export class AuthenticationModule {}
