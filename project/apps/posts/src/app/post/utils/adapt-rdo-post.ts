import { Post } from '@project/shared/app-types';
import { fillObject } from '@project/util/util-core';
import { LinkPostRdo } from '../rdo/post-link.rdo';
import { PhotoPostRdo } from '../rdo/post-photo.rdo';
import { QuotePostRdo } from '../rdo/post-quote.rdo';
import { TextPostRdo } from '../rdo/post-text.rdo';
import { VideoPostRdo } from '../rdo/post-video.rdo';
import { PostType } from '@prisma/client';

export function adaptRdoPost(Post: Post) {
  switch (Post.type) {
    case PostType.reference:
      return fillObject(LinkPostRdo, Post);
    case PostType.photo:
      return fillObject(PhotoPostRdo, Post);
    case PostType.quote:
      return fillObject(QuotePostRdo, Post);
    case PostType.text:
      return fillObject(TextPostRdo, Post);
    case PostType.video:
      return fillObject(VideoPostRdo, Post);
    }
}
