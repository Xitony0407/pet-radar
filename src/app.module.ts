// archivo: app.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailerModule } from '@nestjs-modules/mailer';

import { LostPetsModule } from './lost-pets/lost-pets.module';
import { FoundPetsModule } from './found-pets/found-pets.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Xitony0407',
      database: 'petrador',
      autoLoadEntities: true,
      synchronize: true,
    }),

    MailerModule.forRoot({
      transport: {
        service: 'gmail',
        auth: {
          user: 'gutierrezperezximena4@gmail.com',
          pass: 'enjzjrjrwcxgyjon',
        },
      },
    }),

    LostPetsModule,
    FoundPetsModule,
  ],
})
export class AppModule {}