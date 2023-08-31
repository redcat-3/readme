import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  HttpStatus,
  HttpCode,
  Patch,
  Query,
} from '@nestjs/common';
import { PostService } from './post.service';
import { PostRdo } from './rdo/post.rdo';
import { CommentService } from '../comment/comment.service';
import { fillObject } from '../../../../../libs/util/util-core/src/lib/helpers'
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post as PostModel} from '@prisma/client';
import { PostQuery } from './query/post.query';

@Controller('posts')
export class PostController {
  constructor(
    private readonly postService: PostService,
    private readonly commentService: CommentService
  ) {}

  @Get('/:id')
  async show(@Param('id') id: string): Promise<PostModel>{
    const post = await this.postService.post({ postId: Number(id) });
    return fillObject(PostRdo, post);
  }

  @Get('/')
  async index(@Query() query: PostQuery){
    const post = await this.postService.find(query);
    return fillObject(PostRdo, post);
  }

  @Post('/create')
  async create(
    @Body() dto: CreatePostDto ) {
      const newPost = await this.postService.createPost(dto);
    return fillObject(PostRdo, newPost);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id') id: number) {
    return this.postService.deletePost(id);
  }

  @Patch('/update/:id')
  async update(@Param('id') id: string, dto: UpdatePostDto) {
    const updatedPost = await this.postService.updatePost({
      where: { postId: Number(id) },
      data: { ...dto,
        comments: {
          connect: []
        },
       }
    });
    return fillObject(PostRdo, updatedPost);
  }
}

