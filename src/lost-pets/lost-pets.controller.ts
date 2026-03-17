// archivo: lost-pets.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { LostPetsService } from './lost-pets.service';

@Controller('lost-pets')
export class LostPetsController {

  constructor(private readonly lostPetsService: LostPetsService) {}

  @Post()
  async create(@Body() body: any) {
    return await this.lostPetsService.create(body);
  }

}