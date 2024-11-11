import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { user, userDocument } from 'src/user/userSchema/user.schema';
import { userDto } from './userDto/userDto';


@Injectable()
export class UserService {
 
   //constructor(@InjectModel(user.name) private UserModule: Model<user>){}
    constructor(@InjectModel(user.name) private userModel: Model<userDocument>){}


   async create(userDto:userDto): Promise<user> {  
    
    const newa =   new  this.userModel(userDto);  
    
     await newa.save();

   
   return newa
  }  


  async findAll() {  

    return this.userModel.find().exec();  
  }  

  async findOne(id: string) {  
    const note = await this.userModel.findById(id).exec();  
    if (!note) throw new NotFoundException('Note not found');  
    return note;  
  }  

  async update(id: string, updateNoteDto: userDto) {  
    const updatedNote = await this.userModel.findByIdAndUpdate(id, updateNoteDto, { new: true });  
    if (!updatedNote) throw new NotFoundException('Note not found');  
    return updatedNote;  
  }  


  async remove(id: string) {  
    const deletedNote = await this.userModel.findByIdAndDelete(id);  
    if (!deletedNote) throw new NotFoundException('Note not found');  
    return deletedNote;  
  }  
}  

