import { Controller, HttpStatus, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { FileService } from './file.service';

@Controller('file')
export class FileController {
  constructor(
    private readonly fileService: FileService
  ) {}

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Images uploaded'
  })
  @Post('post')
  public async uploadImages() {
    return await this.fileService.uploadImages();
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Avatar uploaded'
  })
  @Post('avatar')
  public async uploadAvatar() {
    return await this.fileService.uploadAvatar();
  }
}
