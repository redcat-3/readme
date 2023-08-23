import { PostStatus } from './post-status.enum'
import { VideoPost, TextPost, QuotePost, PhotoPost, RefPost} from './content.interface';
import { PostType } from './post-type.enum';
import { Comment } from '@project/shared/app-types';

export interface Post {
  postId: number;
  title: string;
  tegs: string[];
  author: string;
  createAt: Date;
  publishAt: Date;
  status: PostStatus;
  likesCount: number;
  repost: boolean;
  originAuthor: string;
  originId: string;
  type: PostType;
  content: VideoPost | TextPost | QuotePost | PhotoPost | RefPost;
  comments: Comment[];
}
