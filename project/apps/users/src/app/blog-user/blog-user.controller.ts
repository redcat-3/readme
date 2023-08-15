import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import { BlogUserService } from './blog-user.service';
import { ApiResponse } from '@nestjs/swagger';
import { UserDetailsRdo } from './rdo/user-details.rdo';

@Controller('user')
export class BlogUserController {
  constructor(
    private readonly userService: BlogUserService
  ) {}

  @ApiResponse({
    type: UserDetailsRdo,
    status: HttpStatus.OK,
    description: 'User find'
  })
  @Get(':id')
  public async getUserDetails(@Param('id') id: string) {
    return await this.userService.getUserDetails(id);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User find'
  })
  @Get(':id/follow')
  public async followUser(@Param('id') id: string) {
    return await this.userService.followUser(id);
  }
}
