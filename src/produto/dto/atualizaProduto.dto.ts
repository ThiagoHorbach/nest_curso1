import { IsOptional } from "class-validator";

export class atualizaProdutoDTO {
    
    @IsOptional()
    titulo: string;

    @IsOptional()
    descricao: string;

    @IsOptional()
    valor: number;
    
    @IsOptional()
    ativo: boolean;

}