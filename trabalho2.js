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

  const produtosJSON = JSON.stringify(produtos)
  console.log(produtosJSON)

  const fs = require("fs")
  fs.writeFileSync("produtos.json", produtosJSON)

  const produtosArquivo = require("./produtos.json")
  console.log(produtosArquivo)

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

      function AdicionaProduto(nome, preco, estoque, empr_fabricante, modelo, ano_lancamento){
          
      }
