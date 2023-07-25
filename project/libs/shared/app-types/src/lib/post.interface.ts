import { PostStatus } from './post-status.enum'

export interface Post {
  _id?: string;
  title: string;
  tegs: string[];
  author: string;
  creationDate: string;
  publicationDate: string;
  status: PostStatus;
  likesCount: number;
  liked: boolean;
  comments: string[];
  repost: boolean;
  originAuthor: string;
  originId: string;
}
