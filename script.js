// divListaProduto.insertAdjacentHTML('afterbegin', '');

class Produto
{
    constructor (nome, dCadastro, descricao, preco)
    {
        this.nome = nome;
        this.dCadastro = dCadastro;
        this.descricao = descricao;
        this.preco = preco;

    }

    mostrarProduto()
    {

      return `
      <h3>Produto: ${this.nome}</h1>
      <p>Data de cadastro: ${this.dCadastro}</p>
      <p>${this.descricao}</p>
      <p>preço: ${this.preco}</p>

      `    }
}

class ProdutoDestaque extends Produto
{
  constructor(nome, dCadastro, descricao, preco,  img)
  {
    super(nome, dCadastro, descricao, preco )
    this.img = img;
  }

  mostrar_destaque()
  {
    return `
    <h1>Produto em Destaque: ${this.nome}</h1>
    <p>Data de cadastro: ${this.dCadastro}</p>
    <p>${this.descricao}</p>
    <p>preço: ${this.preco}</p>
    <img src="${this.img}"></img>
    `
  }

}

let pD = document.getElementById("produto-destaque")
let p1 = document.getElementById("produto1")
let p2 = document.getElementById("produto2")
let p3 = document.getElementById("produto3")

const produtoD = new ProdutoDestaque ("PlayStation 5", "14/10/2020" , "Um console de nova geração com jogos até 120fps", "R$ 4.799,99", "https://i.promobit.com.br/268/456342844416003668966101124919.png" )

const produto1 = new Produto ("Xbox Series S", "10/11/2020", "O console mais barato da nova geração!", "R$ 2.599,90")
const produto2 = new Produto ("Fone de Ouvido Havit HV-H2002d", "18/11/2019", "Um dos melhores fones de ouvido custo beneficio!", "R$ 159,90")
const produto3 = new Produto ("Livro 1984", "21/06/2012", "Um Livro de Ficção com uma crítica real por trás de sua história", "R$ 19,99")


// console.log(produto.mostrarProduto()) 




pD.insertAdjacentHTML('afterbegin', produtoD.mostrar_destaque());
p1.insertAdjacentHTML('afterbegin', produto1.mostrarProduto());
p2.insertAdjacentHTML('afterbegin', produto2.mostrarProduto());
p3.insertAdjacentHTML('afterbegin', produto3.mostrarProduto());
