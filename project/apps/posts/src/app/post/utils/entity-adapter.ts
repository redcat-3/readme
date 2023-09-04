import { LinkPostEntity } from '../entity/post-link.entity';
import { PhotoPostEntity } from '../entity/post-photo.entity';
import { QuotePostEntity } from '../entity/post-quote.entity';
import { TextPostEntity } from '../entity/post-text.entity';
import { VideoPostEntity } from '../entity/post-video.entity';

export const TypeEntityAdapter = {
  'link': LinkPostEntity,
  'photo': PhotoPostEntity,
  'quote': QuotePostEntity,
  'text': TextPostEntity,
  'video': VideoPostEntity
}
