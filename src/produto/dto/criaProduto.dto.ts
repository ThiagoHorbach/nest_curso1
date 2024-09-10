import { IsDecimal, IsNotEmpty } from "class-validator";

export class criaProdutoDTO {
    
    @IsNotEmpty({ message: 'O campo titulo não pode ficar em branco'})
    titulo: string;

    @IsNotEmpty({ message: 'O campo descricao não pode ficar em branco'})
    descricao: string;

    @IsNotEmpty({ message: 'O campo valor não pode ficar em branco'})
    valor: number;
    
    @IsNotEmpty({ message: 'O campo ativo não pode ficar em branco'})
    ativo: boolean;

}