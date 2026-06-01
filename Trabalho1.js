const produtos = ["Pão", "Açucar", "Refrigerante", "Macarrão", "Chocolate", "Arroz", "Feijão", "Leite", "Pasta de Dente", "Bolacha"]
const precos = [0.75, 5.50, 11.50, 4.50, 5.99, 32.25, 9.70, 6.80, 7.30, 5.15]
const Q_estoque = [25, 51, 90, 26, 18, 73, 49, 67, 90, 07]



function lerProduto(){
    console.log("#### ESTOQUE ####")
    let contador = 0
    while(contador < produtos.length){
        console.log("Produto: " + produtos[contador] + " Preço: " + precos[contador])
        contador ++
    }
    console.log("#################")

}

function novo_produto(produto, preco){
    produtos.push(produto)
    precos.push(preco)
}

lerProduto()
novo_produto("Farinha", 15.94)
lerProduto()
