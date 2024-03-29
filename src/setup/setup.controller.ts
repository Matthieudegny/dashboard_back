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
import { SetupService } from './setup.service';
import { SetupDto } from './dto/setup.dto';

@ApiTags('Setup')
@Controller('setup')
export class SetupController {
  constructor(private setupService: SetupService) {}

  @Post()
  create(@Body() createSetupDto: SetupDto) {
    console.log('controller');
    return this.setupService.create(createSetupDto);
  }

  @Get()
  findAll() {
    return this.setupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.setupService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSetupDto: SetupDto) {
    return this.setupService.update(+id, updateSetupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.setupService.remove(+id);
  }
}
