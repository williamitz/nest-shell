import { IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    
    @IsString()
    @MinLength(3)
    email: string;
    
    @IsString()
    @MinLength(6)
    @IsOptional()
    phone?: string;

    @IsString()
    @MinLength(6)
    @MaxLength(50)
    @Matches(
        /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'The password must have a Uppercase, lowercase letter and a number'
    })
    password: string;

    @IsString()
    @MinLength(3)
    fullName: string;
        
}
