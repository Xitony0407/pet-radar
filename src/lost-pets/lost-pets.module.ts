import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LostPetsService } from './lost-pets.service';
import { LostPetsController } from './lost-pets.controller';
import { LostPet } from './entities/lost-pet.entity'; // ajusta la ruta si es necesario

@Module({
  imports: [TypeOrmModule.forFeature([LostPet])], // <-- aquí se registra el repositorio
  providers: [LostPetsService],
  controllers: [LostPetsController],
})
export class LostPetsModule {}