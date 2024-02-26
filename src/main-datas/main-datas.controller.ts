import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Param } from '@nestjs/common';
//Services
import { MainDatasService } from './main-datas.service';

@ApiTags('MainDatas')
@Controller('main-datas')
export class MainDatasController {
  constructor(private readonly mainDatasService: MainDatasService) {}

  @Get()
  findAll() {
    console.log('main-datas.controller.ts:findAll');
  }

  @Get(':idUser')
  async findMainDatasbyIdUser(@Param('idUser') idUser: number) {
    return this.mainDatasService.findMainDatasbyIdUser(idUser);
  }
}
