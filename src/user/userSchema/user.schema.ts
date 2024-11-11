import { Schema , SchemaFactory, Prop } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type userDocument = user & Document


@Schema()
export class user   {

     @Prop({required:true})
    title:string



    @Prop({required:false})
    picture:string


    @Prop({required:false})
    name:string

    @Prop({required:false})
    price:string

    @Prop({required:false})
    bonus:string


    @Prop({required:false})
    ads:boolean
}


export const userSchema = SchemaFactory.createForClass(user)
