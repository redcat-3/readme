import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { Comment } from '@project/shared/app-types';
import { PostStatus, PostType } from '@prisma/client';

export class PostRdo {
  @ApiProperty({
    description: 'The uniq post ID',
    example: '13'
  })
  @Expose({ name: '_id'})
  public postId: number;

  @ApiProperty({
    description: 'Title of the post',
    example: 'Universe loves you'
  })
  @Expose()
  public title: string;

  @ApiProperty({
    description: 'Tegs of the post',
    example: ['#love', '#universe']
  })
  @Expose()
  public tegs: string[];

  @ApiProperty({
    description: 'Author of the post',
    example: 'Keks'
  })
  @Expose()
  public author: string;

  @ApiProperty({
    description: 'Date of creation the post',
    example: '2020-04-02T08:02:17-05:00'
  })
  @Expose()
  public createAt: Date;

  @ApiProperty({
    description: 'Date of publication the post',
    example: '2020-04-02T08:02:17-05:00'
  })
  @Expose()
  public publishAt: Date;

  @ApiProperty({
    description: 'Status of the post, published or draft',
    example: 'published'
  })
  @Expose()
  public status: PostStatus;

  @ApiProperty({
    description: 'Count of likes of the post',
    example: 25
  })
  @Expose()
  public likesCount: number;

  @ApiProperty({
    description: 'Comments list of the post',
    example: ['869696oplklkl']
  })
  @Expose()
  public comments: Comment[];

  @ApiProperty({
    description: 'Post is reposted or not',
    example: false
  })
  @Expose()
  public repost: boolean;

  @ApiProperty({
    description: 'Author indificator of origin post',
    example: '9809kjkxjfj'
  })
  @Expose()
  public originAuthor: string;

  @ApiProperty({
    description: 'Indificator of origin post',
    example: '839872jxhkhx'
  })
  @Expose()
  public originId: string;

  @ApiProperty({
    description: 'Type of the post',
    example: PostType.photo
  })
  @Expose()
  public type: PostType;

  @ApiProperty({
    description: `Path to content file}`,
    example: '2020-04-02T08:02:17-05:00'
  })
  @Expose()
  public content: string;
}
