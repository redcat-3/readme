import { plainToInstance } from 'class-transformer';
import {
  CreateLinkPostDto,
  CreatePhotoPostDto,
  CreateQuotePostDto,
  CreateTextPostDto,
  CreateVideoPostDto,
  CreatePostDto
} from '@project/shared/shared-dto';
import { PostType } from '@project/shared/app-types';
import { UpdateLinkPostDto,
  UpdatePhotoPostDto,
  UpdateQuotePostDto,
  UpdateTextPostDto,
  UpdateVideoPostDto,
  UpdatePostDto } from '@project/shared/shared-dto';

export function adaptCreateDtoPost(dto: CreatePostDto) {
  switch (dto.type) {
    case PostType.Link:
      return plainToInstance(CreateLinkPostDto, dto);
    case PostType.Photo:
      return plainToInstance(CreatePhotoPostDto, dto);
    case PostType.Quote:
      return plainToInstance(CreateQuotePostDto, dto);
    case PostType.Text:
      return plainToInstance(CreateTextPostDto, dto);
    case PostType.Video:
      return plainToInstance(CreateVideoPostDto, dto);
  }
}

export function adaptUpdateDtoPost(dto: UpdatePostDto) {
  switch (dto.type) {
    case PostType.Link:
      return plainToInstance(UpdateLinkPostDto, dto);
    case PostType.Photo:
      return plainToInstance(UpdatePhotoPostDto, dto);
    case PostType.Quote:
      return plainToInstance(UpdateQuotePostDto, dto);
    case PostType.Text:
      return plainToInstance(UpdateTextPostDto, dto);
    case PostType.Video:
      return plainToInstance(UpdateVideoPostDto, dto);
  }
}
