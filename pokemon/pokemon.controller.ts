
import { Request, Response } from "express";
import { PokemonService } from "./pokemon.service";

class PokemonController {
  
    async salvarPokemonJson(req: Request, res: Response) {
    const pokemons = await new PokemonService().salvarPokemon();
    return res.status(200).json(pokemons);
  }

  /*
  async criarProduto (req: Request, res: Response){

    const product = await new ProductService().CriarProduto (req.body)

    return res.status (200).json (product)
}

async listarProdutos (req: Request, res: Response){
    
    const productList = await new ProductService().listarTodosProdutos()
    return res.status(200).json(productList)

}

async buscarProdutoPeloId (req: Request, res: Response){

    const product = await new ProductService().produtoPorId (req.params.id)//id aqui ta vindo do :id do routes
    return res.status(200).json(product)
}//colocar a rota /ida

async buscarProdutoPorNome (req: Request, res: Response){

    const porNome = await new ProductService().buscarProdutoPorNome (req.query.meu_nome)
    return res.status (200).json(porNome)
}//query contém as informações da consulta de uma URL
//colocar rota?meu_nome=Tiago

async atualizarProduto (req: Request, res: Response){
    const atualizar = await new ProductService().atualizarProduto (req.params.id, req.body)
    return res.status(200).json (atualizar)

}

async deletarProduto(req: Request, res: Response){
    const deletado = await new ProductService().deletarProduto (req.params.id)
    return res.status(200).json (deletado)

}

async adicionarStock (req: Request, res: Response){
        const stock = await new StockService().criarStock()
        return res.status(200).json(stock)
    } 

    async calcularTotalStock (req: Request, res: Response){
        const totalStock = await new StockService().calcularTotalStock()
        return res.status(200).json(totalStock)

    }

    async escreverArquivo (req: Request, res: Response){
        const resposta = await new StockService().escreverArquivo()
        return res.status(200).json(resposta)

    }

    async lerArquivo(req: Request, res: Response){
        const resposta = await new StockService().lerArquivo()
        return res.status(200).json(resposta)

    }

*/

}
export default new PokemonController();

