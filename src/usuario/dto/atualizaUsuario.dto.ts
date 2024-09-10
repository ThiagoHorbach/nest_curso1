import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { EmailUnico } from "../validacao/emailUnico.validator";

export class atualizaUsuarioDTO {
    
    @IsNotEmpty({ message: 'O nome não pode ser vazio'})  
    @IsOptional()
    nome: string;
    
    @IsEmail(undefined, {message: 'O email informado é inválido'})
    @EmailUnico({ message: 'Já existe um usuário com este email'})
    @IsOptional()
    email: string;
    
    @MinLength(6, { message: 'a senha precisa ter pelo menos 6 caracteres'})
    @IsOptional()
    senha: string;
}