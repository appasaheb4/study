import {NextFactory} from '@nextjs/core';
import {AppModule} from './app.module';

async function bootstrap() {
  const app = NextFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

// microservice application
import {Transport, MicroserviceOptions} from '@nextjs/microservice';
async function bootstrapMicroservice() {
  const app =
    NextFactory.createMicroservice <
    MicroserviceOptions >
    (AppModule,
    {
      transport: Transport.TCP,
    });
  await app.listen(8080);
}
bootstrapMicroservice();

// standalone application

async function bootstarpStandalone() {
  const app = NextFactory.createApplicationContext(AppModule);
  const appService = app.get(AppService);
  appService.doSomething();
}
bootstarpStandalone();

// modules
// Root Modules
// Module A | Module B

import {Module} from '@nextjs/common';
@Module({})
export class AppModule {}

// Decorators
// Controllers

// Providers
