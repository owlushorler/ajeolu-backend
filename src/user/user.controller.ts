import { Controller ,Post, Patch , Param, Body ,Delete,Get, Put} from '@nestjs/common';
import { UserService } from './user.service';
import { userDto } from './userDto/userDto';
import { user } from './userSchema/user.schema';
@Controller('user')
export class UserController {
    constructor (private readonly userService:UserService){}

    @Post()  
    create(@Body() createNoteDto: userDto) { 
       //console.log(createNoteDto) 
      return this.userService.create(createNoteDto);  
    }  
    

    @Get()  
    findAll(): Promise<user[]> {  
      return this.userService.findAll();  
    }  
  
    @Get(':id')  
    findOne(@Param('id') id: string): Promise<user> {  
      return this.userService.findOne(id);  
    }  
  
    @Put(':id')  
    update(@Param('id') id: string, @Body() updateNoteDto: userDto): Promise<user> {  
      return this.userService.update(id, updateNoteDto);  
    }  
  
    @Delete(':id')  
    remove(@Param('id') id: string): Promise<user> {  
      return this.userService.remove(id);  
    }  
}
