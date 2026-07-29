import {NextFactory} from '@nextjs/core';
import {AppModule} from './app.module';

async function main() {
  const app = NextFactory.create(AppModule);
  await app.listen(8080);
}
