// Cria uma lista que cada objeto tem mais de uma coisa
const produtos = [
    {
      nome: "iPhone 17 Pro Max",
      preco: 9800.00,
      estoque: 53,
      empr_fabricante: "Apple",
      modelo: "A3296",
      ano_lancamento: 2025,
    },
    {
      nome: "Galaxy S26 Ultra",
      preco: 9600.00,
      estoque: 10,
      empr_fabricante: "Samsung",
      modelo: "SM-S948",
      ano_lancamento: 2026,
    },
    {
      nome: "Galaxy A57 5G",
      preco: 2700.00,
      estoque: 25,
      empr_fabricante: "Samsung",
      modelo: "SM-A576",
      ano_lancamento: 2026,
    },
    {
      nome: "Xiaomi 15T Pro",
      preco: 4200.00,
      estoque: 15,
      empr_fabricante: "Xiaomi",
      modelo: "25019PNBC",
      ano_lancamento: 2025,
    },
    {
      nome: "Redmi Note 15 Pro",
      preco: 2100.00,
      estoque: 30,
      empr_fabricante: "Xiaomi",
      modelo: "26012RKC",
      ano_lancamento: 2026,
    },
    {
      nome: "Moto G86 5G",
      preco: 1800.00,
      estoque: 40,
      empr_fabricante: "Motorola",
      modelo: "XT2641",
      ano_lancamento: 2026,
    },
    {
      nome: "Razr 60 Ultra",
      preco: 5500.00,
      estoque: 12,
      empr_fabricante: "Motorola",
      modelo: "XT2553",
      ano_lancamento: 2025,
    },
    {
      nome: "Pixel 10 Pro",
      preco: 6800.00,
      estoque: 8,
      empr_fabricante: "Google",
      modelo: "GOS10",
      ano_lancamento: 2025,
    },
    {
      nome: "Poco X7 Pro",
      preco: 2400.00,
      estoque: 22,
      empr_fabricante: "Xiaomi (Poco)",
      modelo: "25018PPC",
      ano_lancamento: 2026,
    },
    {
       nome: "Realme Note 70",
      preco: 1100.00, 
      estoque: 60,
       empr_fabricante: "Realme",
       modelo: "RMX3930",
       ano_lancamento: 2026,
    }
  ]

  // Cria O JSON
  const produtosJSON = JSON.stringify(produtos)
  console.log(produtosJSON)

  // Cria um arquivo JSON
  const fs = require("fs")
  fs.writeFileSync("produtos.json", produtosJSON)

  //Le o arquivo JSON
  const produtosArquivo = require("./produtos.json")
  console.log(produtosArquivo)

  // MOSTRAR OS DADOS DO ARQUIVO ORGANIZADAMENTE
  console.log("LISTA DE PRODUTOS ORGANIZADA: \n")
  produtosArquivo.forEach((produto)=>{
    console.log(produto.nome + ":\n" +
        " - modelo: " + produto.modelo + "\n" +
        " - Fabricante: " + produto.empr_fabricante + "\n" +
        " - Lançado em: " + produto.ano_lancamento + "\n" +
        " - Preço: R$" + produto.preco + "\n" +
        " - Estoque: " + produto.estoque + " unidade(s) \n")
    console.log("######################################## \n")
})
  console.log("################################################################# \n")

  // Adiciona um novo Produto
      function AdicionaProduto(nome, preco, estoque, empr_fabricante, modelo, ano_lancamento){
          

            const existe = produtosArquivo.some
            produtos = produtos.nome == nome

        if(existe == true){
        console.log("O celular " + nome + " já estáva no estoque")
            
          }else{
            produtos.push({
                nome: nome,
                preco: preco,
                estoque: estoque,
                empr_fabricante: empr_fabricante,
                modelo: modelo,
                ano_lancamento: ano_lancamento})
                console.log("O celular " + nome + " foi adicionado ao estoque com sucesso")
        }
      }

      AdicionaProduto("Nokia 110 4G", 163, 37, "Nokia", "feature phone", 2023)











      // filtra os produtos com preco a baixo de 
const filtro = produtos.filter((produto)=> produto.preco =< 1500)
console.log(filtro)


// Alterar todos os produtos
console.log("PRODUTOS COM DESCONTO DE 15%")
const desconto = produtos.map((produto)=> return {...produto, preco: produto.preco * 0.85})
console.log(desconto)


// ENCONTRAR UM DETERMINADO PRODUTO
const encontrar = produtos.find((produto)=> produto.marca == "Motorola")
console.log(encontrar)
