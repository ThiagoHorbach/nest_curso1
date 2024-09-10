
export class listaProdutosDTO {

    constructor(
        readonly id: string,
        readonly titulo: string,
        readonly descricao: string,
        readonly valor: number,
        readonly ativo: boolean
    ) {}

}