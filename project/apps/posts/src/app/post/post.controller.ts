import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
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

  @Get('/:id')
  async show(@Param('id') id: string) {
    const postId = parseInt(id, 10);
    const post = await this.postService.getPost(postId);
    return fillObject(PostRdo, post);
  }

  @Get('/')
  async index() {
    const posts = await this.postService.getPosts();
    return fillObject(PostRdo, posts);
  }

  @Post('/')
  async create(@Body() dto: CreatePostDto) {
    const newPost = await this.postService.createPost(dto);
    return fillObject(PostRdo, newPost);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id') id: string) {
    const postId = parseInt(id, 10);
    this.postService.deletePost(postId);
  }

  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdatePostDto) {
    const postId = parseInt(id, 10);
    const updatedPost = await this.postService.updatePost(postId, dto);
    return fillObject(PostRdo, updatedPost)
  }
}

