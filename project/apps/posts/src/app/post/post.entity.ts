import { Post } from '@project/shared/app-types';
import { VideoPost, TextPost, QuotePost, PhotoPost, RefPost } from 'libs/shared/app-types/src/lib/content.interface';
import { PostStatus } from 'libs/shared/app-types/src/lib/post-status.enum';
import { PostType } from 'libs/shared/app-types/src/lib/post-type.enum';

export class PostEntity implements Post {
  public _id: string;
  public title: string;
  public tegs: string[];
  public author: string;
  public creationAt: string;
  public publicationDate: string;
  public status: PostStatus;
  public likesCount: number;
  public liked: boolean;
  public comments: string[];
  public repost: boolean;
  public originAuthor: string;
  public originId: string;
  public type: PostType;
  public content: VideoPost | TextPost | QuotePost | PhotoPost | RefPost;

  constructor(post: Post) {
    this.fillEntity(post);
  }

  public toObject() {
    return {
      _id: this._id,
      title: this.title,
      tegs: this.tegs,
      author: this.author,
      creationAt: this.creationAt,
      publicationDate: this.publicationDate,
      status: this.status,
      likesCount: this.likesCount,
      liked: this.liked,
      comments: this.comments,
      repost: this.repost,
      originAuthor: this.originAuthor,
      originId: this.originId,
      type: this.type,
      content: this.content
    };
  }

  public fillEntity(post: Post) {
    this._id = post._id;
    this.title = post.title;
    this.tegs = post.tegs;
    this.author = post.author;
    this.creationAt = post.creationAt;
    this.publicationDate = post.publicationDate;
    this.status = post.status;
    this.likesCount = post.likesCount;
    this.liked = post.liked;
    this.comments = post.comments;
    this.repost = post.repost;
    this.originAuthor = post.originAuthor;
    this.originId = post.originId;
    this.type = post.type;
    this.content = post.content;
  }
}
