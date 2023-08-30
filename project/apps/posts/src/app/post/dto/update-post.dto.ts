import { ApiProperty } from '@nestjs/swagger';
import { PostStatus, PostType } from '@prisma/client';
import { Comment } from '@project/shared/app-types';

export class UpdatePostDto {
  @ApiProperty({
    description: 'The uniq post ID',
    example: '98'
  })
  public postId: number;

  @ApiProperty({
    description: 'Title of the post',
    example: 'Universe loves you'
  })
  public title: string;

  @ApiProperty({
    description: 'Tegs of the post',
    example: ['#love', '#universe']
  })
  public tegs: string[];

  @ApiProperty({
    description: 'Author of the post',
    example: '413'
  })
  public author: string;

  @ApiProperty({
    description: 'Date of creation the post',
    example: '2020-04-02T08:02:17-05:00'
  })
  public createAt: Date;

  @ApiProperty({
    description: 'Date of publication the post',
    example: '2020-04-02T08:02:17-05:00'
  })
  public publishAt: Date;

  @ApiProperty({
    description: 'Status of the post, published or draft',
    example: 'published'
  })
  public status: PostStatus;

  @ApiProperty({
    description: 'Count of likes of the post',
    example: 25
  })
  public likesCount: number;

  @ApiProperty({
    description: 'Comments list of the post',
    example: ['869']
  })
  public comments: Comment[];

  @ApiProperty({
    description: 'Post is reposted or not',
    example: false
  })
  public repost: boolean;

  @ApiProperty({
    description: 'Author indificator of origin post',
    example: '98'
  })
  public originAuthor: string;

  @ApiProperty({
    description: 'Indificator of origin post',
    example: '83'
  })
  public originId: string;

  @ApiProperty({
    description: 'Type of the post',
    example: PostType.photo
  })
  public type: PostType;

  @ApiProperty({
    description: `Path to content file`,
    example: '/images/1.jpg'
  })
  public content: string;
}
