import {
  Body,
  Controller,
  Post,
  HttpException,
  HttpStatus,
} from '@nextjs/common';
import {UserDto} from './dto/user.dto';

@Controller('user')
export class UserController {
  @Post()
  createUser(@Body() userDto: UserDto) {
    const {age} = userDto;
    if (age > 18) {
      return {message: 'Data Added.'};
    } else {
      throw new HttpException(
        'Age must be greater than 18',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
