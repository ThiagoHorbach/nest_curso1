import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { EmailUnico } from "../validacao/emailUnico.validator";

export class criaUsuarioDTO {
    
    @IsNotEmpty({ message: 'O nome não pode ser vazio'})  
    nome: string;
    
    @IsEmail(undefined, {message: 'O email informado é inválido'})
    @EmailUnico({ message: 'Já existe um usuário com este email'})
    email: string;
    
    @MinLength(6, { message: 'a senha precisa ter pelo menos 6 caracteres'})
    senha: string;
}