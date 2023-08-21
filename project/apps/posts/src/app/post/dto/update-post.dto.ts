import { ApiProperty } from '@nestjs/swagger';
import { PhotoPost, QuotePost, RefPost, TextPost, VideoPost } from 'libs/shared/app-types/src/lib/content.interface';
import { PostStatus } from 'libs/shared/app-types/src/lib/post-status.enum';
import { PostType } from 'libs/shared/app-types/src/lib/post-type.enum';
import { Comment } from '@project/shared/app-types';

export class UpdatePostDto {
  @ApiProperty({
    description: 'The uniq post ID',
    example: '980948930xh'
  })
  public id: number;

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
    example: 'Keks'
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
    example: ['869696oplklkl']
  })
  public comments: Comment[];

  @ApiProperty({
    description: 'Post is reposted or not',
    example: false
  })
  public repost: boolean;

  @ApiProperty({
    description: 'Author indificator of origin post',
    example: '9809kjkxjfj'
  })
  public originAuthor: string;

  @ApiProperty({
    description: 'Indificator of origin post',
    example: '839872jxhkhx'
  })
  public originId: string;

  @ApiProperty({
    description: 'Type of the post',
    example: PostType.PHOTO
  })
  public type: PostType;

  @ApiProperty({
    description: `Content of the post may be ${Object.values(PostType)}`,
    example: '2020-04-02T08:02:17-05:00'
  })
  public content: VideoPost | TextPost | QuotePost | PhotoPost | RefPost;
}
