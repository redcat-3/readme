import { Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { PostService } from '../../../../posts/src/app/post/post.service'
import { BlogUserService } from '../../../../users/src/app/blog-user/blog-user.service'
import { ApiResponse } from '@nestjs/swagger';
import { FeedService } from './feed.service';

@Controller('feed')
export class FeedController {
  constructor(
    private readonly postService: PostService,
    private readonly userService: BlogUserService,
    private readonly feedService: FeedService
  ) {}

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Feed has been successfully find.'
  })
  @Get()
  public async find() {
    this.userService.getFollowUsers();
    this.postService.findByUser();
    this.feedService.pagination();
    return;
  }

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The new repost has been successfully created.'
  })
  @Post()
  public async repost() {
    this.postService.repost();
    return;
  }
}
