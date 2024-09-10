import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProdutoRepository } from "./produto.repository";
import { criaProdutoDTO } from "./dto/criaProduto.dto";
import { ProdutoEntity } from "./produto.entity";
import { v4 as uuid } from 'uuid';
import { listaProdutosDTO } from "./dto/listaProdutos.dto";
import { atualizaProdutoDTO } from "./dto/atualizaProduto.dto";

@Controller('/produtos')
export class ProdutoController {
    constructor(private produtoRepository: ProdutoRepository) {}

    @Post()
    async criaProduto(@Body() dadosProduto:criaProdutoDTO) {
        
        const produtoEntity = new ProdutoEntity();
        produtoEntity.id = uuid();
        produtoEntity.titulo = dadosProduto.titulo;
        produtoEntity.descricao = dadosProduto.descricao;
        produtoEntity.valor = dadosProduto.valor;
        produtoEntity.ativo = dadosProduto.ativo;

        this.produtoRepository.salvar(produtoEntity);

        return {
            produto: produtoEntity.titulo,
            message: 'Produto '+ produtoEntity.titulo +' Cadastrado com sucesso.'
        }
    }

    @Get()
    async listaProdutos() {
        const produtosSalvos = await this.produtoRepository.listar();
        const produtosLista = produtosSalvos.map(
            produto => new listaProdutosDTO(
                produto.id,
                produto.titulo,
                produto.descricao,
                produto.valor,
                produto.ativo
            )
        );
        return produtosLista;
    }

    @Get('/busca/titulo/:titulo')
    async listaProdutosTitulo(@Param('titulo') titulo: string) {
        const produtosComEsteTitulo = await this.produtoRepository.listarComEsteTitulo(titulo);
        return produtosComEsteTitulo;
    }

    @Put('/:id')
    async atualizaProdutos(@Param('id') id: string, @Body() novosDados:atualizaProdutoDTO) {
        const produtoAtualizado = await this.produtoRepository.atualiza(id, novosDados);
        return {
            produto: produtoAtualizado,
            message: 'Produto Atualizado.'
        }
    }

    @Delete('/:id')
    async deletaProduto(@Param('id') id: string) {
        const produtoRemovido = await this.produtoRepository.deleta(id);
        return {
            produto: produtoRemovido,
            message: 'Produto Removido.'
        }
    }

}