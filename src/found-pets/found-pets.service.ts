// archivo: found-pets.service.ts

import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class FoundPetsService {

  constructor(private readonly mailer: MailerService) {}

  async create(data: any) {

    const foundPet = {
      ...data
    };

    // Simulación de coincidencias de mascotas perdidas
    const matches = [
      {
        owner_email: data.finder_email,
        lat: data.lat,
        lng: data.lng
      }
    ];

    if (matches.length > 0) {
      await this.sendEmail(matches, foundPet);
    }

    return {
      message: 'Mascota encontrada registrada',
      data: foundPet
    };
  }

  async sendEmail(matches: any[], foundPet: any) {

    for (const pet of matches) {

      await this.mailer.sendMail({
        to: 'gutierrezperezximena4@gmail.com',
        subject: 'Posible mascota encontrada',
        html: `
          <h2>Encontramos una mascota similar</h2>

          <p><b>Especie:</b> ${foundPet.species}</p>
          <p><b>Raza:</b> ${foundPet.breed ?? 'No identificada'}</p>
          <p><b>Color:</b> ${foundPet.color}</p>
          <p><b>Descripción:</b> ${foundPet.description}</p>

          <h3>Contacto de quien encontró la mascota</h3>

          <p><b>Nombre:</b> ${foundPet.finder_name}</p>
          <p><b>Teléfono:</b> ${foundPet.finder_phone}</p>
          <p><b>Email:</b> ${foundPet.finder_email}</p>

          <h3>Ubicación aproximada</h3>

          <img src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-l(${pet.lng},${pet.lat}),pin-s(${foundPet.lng},${foundPet.lat})/${foundPet.lng},${foundPet.lat},14/600x300?access_token=TOKEN">
        `
      });

    }

  }

}