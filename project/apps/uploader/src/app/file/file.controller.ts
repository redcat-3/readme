import { Controller, Get, Inject, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import 'multer';
import path from 'node:path';
import { FileService } from './file.service';
import { fillObject } from '@project/util/util-core';
import { uploaderConfig } from '@project/config/config-uploader';
import { ConfigType } from '@nestjs/config';
import { UploadedFileRdo } from './rdo/uploaded-file.rdo';
import { MongoidValidationPipe } from '@project/shared/shared-pipes';

@Controller('files')
export class FileController {

  constructor(
    private readonly fileService: FileService,

    @Inject(uploaderConfig.KEY)
    private readonly applicationConfig: ConfigType<typeof uploaderConfig>,
  ) {}

  @Post('/upload')
  @UseInterceptors(FileInterceptor('file'))
  public async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const newFile = await this.fileService.saveFile(file);
    const filePath = path.join(this.applicationConfig.serveRoot, newFile.path);
    return fillObject(UploadedFileRdo, Object.assign(newFile, { filePath }));
  }

  @Get(':fileId')
  public async show(@Param('fileId', MongoidValidationPipe) fileId: string) {
    const existFile = await this.fileService.getFile(fileId);
    const filePath = path.join(this.applicationConfig.serveRoot, existFile.path);
    return fillObject(UploadedFileRdo, Object.assign(existFile, { filePath }));
  }
}
