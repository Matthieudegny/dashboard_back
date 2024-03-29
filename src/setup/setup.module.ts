import { Module } from '@nestjs/common';
import { SetupService } from './setup.service';
import { SetupController } from './setup.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Setup } from '../entities/setup/Setup';

@Module({
  imports: [TypeOrmModule.forFeature([Setup])],
  controllers: [SetupController],
  providers: [SetupService],
  exports: [SetupService],
})
export class SetupModule {}
