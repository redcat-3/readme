import { PostStatus } from './post-status.enum'
import { VideoPost, TextPost, QuotePost, PhotoPost, RefPost} from './content.interface';
import { PostType } from './post-type.enum';

export interface Post {
  _id?: string;
  title: string;
  tegs: string[];
  author: string;
  creationAt: string;
  publicationDate: string;
  status: PostStatus;
  likesCount: number;
  liked: boolean;
  comments: string[];
  repost: boolean;
  originAuthor: string;
  originId: string;
  type: PostType;
  content: VideoPost | TextPost | QuotePost | PhotoPost | RefPost;
}
