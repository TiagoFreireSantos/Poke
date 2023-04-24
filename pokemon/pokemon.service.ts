
export class PokemonService {
    // Método para consumir a API   
     async consumirAPI() {
            try {
                const pokemons = await fetch("http://localhost:3000")
                return pokemons
            } catch (error) {
                console.log('Erro ao tentar consumir a API do Pokemon')
            }
        }
    
        async salvarPokemon() {
            const pokemonList = this.consumirAPI()
            console.log(pokemonList)
        }

    /*

    async CriarProduto (produto: ProductType){
            return await model.create (produto)

        }//método create

        async listarTodosProdutos(){
            //const listaPokemon = await fetch ("http://localhost:portaserverpokemonnoserver/rota")
            return await model.find()//find é o método do mongoose que retorna todos os registros
        }



        async produtoPorId (id: any){
            const produtoPorId = await model.findById (id)
            return produtoPorId

        }

        async buscarProdutoPorNome (nomeParametro: any){
            const buscarPorNome = await model.find ({nome:nomeParametro})//chave valor nome com o valor que ta recebendo
            return buscarPorNome

        }

        async atualizarProduto (id: any, dataBody: ProductType){
            const produtoAtualizado = await model.findOneAndUpdate (
                {_id:id},//filtro
                {nome: dataBody.nome,
                quantidade: dataBody.quantidade,
                valor: dataBody.valor},//informações para substituir ou adicionar
                {new:true})
        return produtoAtualizado
        }

        async deletarProduto (idParametro: any){
            await model.findOneAndDelete ({_id: idParametro})
            return ("Produto deletado com sucesso")
        }
    
        
    async criarStock(){
        const produtosList: ProductType[] = await ProductModel.find()
        const estoque = produtosList.map ((item: ProductType)=>{
            let produtoComEstoque = {
                nome: item.nome,
                quantidade: item.quantidade,
                valor: item.valor,
                stockValue: Number (item.quantidade) * Number (item.valor)
            }
            return produtoComEstoque
        })
        const salvarEstoque = await StockModel.insertMany (estoque)
        return salvarEstoque

    }

    async calcularTotalStock(){
        const produtosList = await StockModel.find()
        const valorStock = produtosList.reduce((soma, acumulador)=>{
            return soma + acumulador.stockValue!

        },0)

        return valorStock

    }

    async escreverArquivo(){
        const produtoList = await ProductModel.find()
        try{
            const fs = require ('fs/promises');
            fs.writeFile ('produtos.json', JSON.stringify (produtoList, null, 2))
            return "Arquivo gerado"

        } catch (err){
            return "!"
        }
    }

    async lerArquivo(){
        try{
        const fs = require ('fs/promises');
        const minhaLista = fs.readFile ('produtos.json', "utf-8")
        return minhaLista

    } catch (err) {
        return err
    }

    }
    
    */

    }
    