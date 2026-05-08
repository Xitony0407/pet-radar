// archivo: lost-pets.service.ts

import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LostPet } from './entities/lost-pet.entity';

@Injectable()
export class LostPetsService {

  constructor(
    @InjectRepository(LostPet)
    private readonly repo: Repository<LostPet>,
  ) {}

  async create(data: any) {

    if (!data || data.lat === undefined || data.lng === undefined) {
      throw new BadRequestException('Debes enviar lat y lng en el body');
    }

    const pet = this.repo.create({
      ...data,
      location: {
        type: 'Point',
        coordinates: [Number(data.lng), Number(data.lat)],
      },
    });

    return await this.repo.save(pet);
  }

  async findAll() {
  return this.repo.find({
    where: {
      is_active: true
    }
  });
}

}