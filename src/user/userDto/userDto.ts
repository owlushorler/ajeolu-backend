import { IsNotEmpty, IsString } from "class-validator"

export class userDto {

  
    @IsNotEmpty()
    @IsString()
    title:string

    @IsNotEmpty()
    @IsString()
    picture:any

    
    @IsNotEmpty()
    @IsString()
    name:string

    @IsNotEmpty()
    @IsString()
    price:string

    @IsNotEmpty()
    @IsString()
    bonus:string

    
    @IsNotEmpty()
    @IsString()
    ads:boolean
}


