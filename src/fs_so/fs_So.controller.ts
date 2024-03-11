import { ApiTags } from '@nestjs/swagger';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Fs_So_Service } from './fs_So.service';
import { Fs_So_Dto } from './dto/fs_So.dto';

@ApiTags('Failure_So')
@Controller('failure-so')
export class FailureSoController {
  constructor(private readonly failureSoService: Fs_So_Service) {}

  @Post()
  create(@Body() createFailureSoDto: Fs_So_Dto) {
    return this.failureSoService.create(createFailureSoDto);
  }

  @Get()
  findAll() {
    return this.failureSoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.failureSoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFailureSoDto: Fs_So_Dto) {
    return this.failureSoService.update(+id, updateFailureSoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.failureSoService.remove(+id);
  }
}