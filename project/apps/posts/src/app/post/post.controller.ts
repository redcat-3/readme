import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { fillObject } from '@project/util/util-core';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { PostRdo } from './rdo/post.rdo';
import { Injectable } from '@nestjs/common';
import { UpdatePostDto } from './dto/update-post.dto';
import { CommentService } from '../comment/comment.service';


@Injectable()
@ApiTags('publication')
@Controller('post')
export class PostController {
  constructor(
    private readonly postService: PostService,
    private readonly commentService: CommentService
  ) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The new post has been successfully created.'
  })
  @Post()
  public async create(@Body() dto: CreatePostDto) {
    const newPost = await this.postService.create(dto);
    return fillObject(PostRdo, newPost);
  }

  @ApiResponse({
    type: PostRdo,
    status: HttpStatus.OK,
    description: 'Post found'
  })
  @Get(':id')
  public async show(@Param('id') id: string) {
    const newPost = await this.postService.getPost(id);
    return fillObject(PostRdo, newPost);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Post found'
  })
  @Patch(':id')
  public async update(@Param('id') id: string, @Body() dto: UpdatePostDto) {
    const updatePost = await this.postService.updatePost(id, dto);
    return fillObject(PostRdo, updatePost);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Post deleted'
  })
  @Delete(':id')
  public async delete(@Param('id') id: string) {
    return await this.postService.delete(id);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Comment created'
  })
  @Post(':id/comments')
  public async postComment() {
    return await this.commentService.postComment();
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Comments found'
  })
  @Get(':id/comments')
  public async getComments() {
    return await this.commentService.getComments();
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Liked status changed'
  })
  @Patch(':id/like')
  public async likeChange() {
    return await this.postService.likeChange();
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Find publication by title'
  })
  @Patch(':id/find')
  public async find() {
    return await this.postService.findByTitle();
  }
}

