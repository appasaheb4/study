import {Module} from '@nextjs/common';
import { UserController } from './user/user.controller';

@Module({
    imports:[],
    controllers:[UserController],
    providers:[],
})
export class AppModule;