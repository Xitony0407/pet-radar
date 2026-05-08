// archivo: lost-pets.controller.ts
import { Get } from '@nestjs/common';
import { Controller, Post, Body } from '@nestjs/common';
import { LostPetsService } from './lost-pets.service';

@Controller('lost-pets')
export class LostPetsController {

  constructor(private readonly lostPetsService: LostPetsService) {}

  @Post()
  async create(@Body() body: any) {
    return await this.lostPetsService.create(body);
  }

  @Get()
findAll() {
  return this.lostPetsService.findAll();
  }

}