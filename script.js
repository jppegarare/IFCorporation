// divListaProduto.insertAdjacentHTML('afterbegin', '');

class MeuErro extends Error {
  constructor(message){
    super(message);
    this.name = "Erro de Preenchimento";
  }
}

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
      try{
        return this.atributos()
      }
      catch(erro){
        console.log(erro)
      }
    }

    atributos()
    {
      if(this.nome != "" && this.dCadastro != "" && this.descricao != ""  && this.preco != "")
      {
        return `
          <h2>${this.nome}</h2>  
          <div>${this.descricao}</div>
          <p>Data de cadastro: ${this.dCadastro}</p>
          <p>${this.preco}</p>
        `
      }
      else
      {
        throw new MeuErro("Insira todos os atributos que estão faltando")
      }

  }
    
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

    try{
      return this.atributos()
    }
    catch(erro){
      console.log(erro)
    }
  }
  atributos(){
    if(this.nome != "" && this.dCadastro != "" && this.descricao != "" && this.preco != ""  && this.img != ""){
      return `
      <h1>${this.nome}</h1>
      <img src="${this.img}"></img>
      <p>${this.preco}</p>
      <p>Data de cadastro: ${this.dCadastro}</p>
      <p>${this.descricao}</p>
      `}
    else{
      throw new MeuErro("Insira todos os atributos que estão faltndo")
    }
  }

}

let pD = document.getElementById("produto-destaque")
let p1 = document.getElementById("produto1")
let p2 = document.getElementById("produto2")
let p3 = document.getElementById("produto3")

const produtoD = new ProdutoDestaque ("PlayStation 5", "14/10/2020" , "Um console de nova geração com jogos até 120fps", "R$ 4.799,99", "https://i.promobit.com.br/268/456342844416003668966101124919.png" )

let produto1 = new Produto ("Xbox Series S", "10/11/2020", "O console mais barato da nova geração!", "R$ 2.599,90")
let produto2 = new Produto ("Fone de Ouvido Havit HV-H2002d", "18/11/2019", "Um dos melhores fones de ouvido custo beneficio!", "R$ 159,90")
let produto3 = new Produto ("Livro 1984", "21/06/2012", "Um Livro de Ficção com uma crítica real por trás de sua história", "R$ 19,99")



pD.insertAdjacentHTML('afterbegin', produtoD.mostrar_destaque());
p1.insertAdjacentHTML('afterbegin', produto1.mostrarProduto());
p2.insertAdjacentHTML('afterbegin', produto2.mostrarProduto());
p3.insertAdjacentHTML('afterbegin', produto3.mostrarProduto());
