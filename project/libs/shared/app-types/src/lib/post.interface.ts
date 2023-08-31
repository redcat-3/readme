import { PostStatus } from './post-status.enum'
import { PostType } from './post-type.enum';

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
  content: string;
}
