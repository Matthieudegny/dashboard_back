import { Module } from '@nestjs/common';
import { ImageSoService } from './image_so.service';
import { ImageSoController } from './image_so.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Image_So } from '../entities/image/Image_so';

@Module({
  imports: [TypeOrmModule.forFeature([Image_So])],
  controllers: [ImageSoController],
  providers: [ImageSoService],
  exports: [ImageSoService],
})
export class ImageSoModule {}
