export interface Comment {
  commentId: number;
  text: string;
  author: string;
  postId: number;
  createAt: Date;
  updatedAt: Date;
}
