import { Injectable } from "@nestjs/common";
import { ProdutoEntity } from "./produto.entity";

@Injectable()
export class ProdutoRepository {
    private produtos: ProdutoEntity[] = [];

    async salvar(produto: ProdutoEntity) {
        this.produtos.push(produto);
    }

    async listar() {
        return this.produtos;
    }

    async listarComEsteTitulo(titulo: string) {
        //busca qualquer produto que contenha este trecho no titulo
        const registros = this.produtos.filter(
            produtoSalvo => produtoSalvo.titulo.toLowerCase().includes(titulo.toLowerCase())
        );

        return registros;
    }


    async atualiza(id: string, dadosParaAtualizar: Partial<ProdutoEntity>){
        
        const produto = this.buscaPorId(id);

        Object.entries(dadosParaAtualizar).forEach(([chave, valor]) => {
            if (chave === 'id') { return; }

            produto[chave] = valor;
        });
    }

    private buscaPorId(id: string){
        const possivelProduto = this.produtos.find(
            produtoSalvo => produtoSalvo.id === id
        );

        if (!possivelProduto) {
            throw new Error('Produto Não existe');
        }

        return possivelProduto;

    }

    async deleta(id: string) {
        const produto = this.buscaPorId(id);

        this.produtos = this.produtos.filter(
            produto => produto.id !== id
        );

        return produto;

    }

    
    

}

