import * as appInsights from 'applicationinsights';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

appInsights.setup('TU_CONNECTION_STRING')
.setAutoDependencyCorrelation(true)
.setAutoCollectRequests(true)
.setAutoCollectPerformance(true, true)
.setAutoCollectExceptions(true)
.start();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
