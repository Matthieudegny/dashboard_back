import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FailureGoController } from './failure_go.controller';
import { FailureGoService } from './failure_go.service';
import { Failure_go } from '../entities/Failure/Failure_go';

@Module({
  imports: [TypeOrmModule.forFeature([Failure_go])],
  controllers: [FailureGoController],
  providers: [FailureGoService],
  exports: [FailureGoService],
})
export class FailureGoModule {}
