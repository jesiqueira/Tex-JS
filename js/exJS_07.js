console.log("teste");
let carrinho = {
  item1: { 'imagem':'salad-374173_1920.jpg','nome': "Salada Mix", 'preco': 12,},
  item2: { 'imagem':'beef-g66eb2a540_1920.jpg','nome': "Carne Grelhada", 'preco': 25,},
  item3: { 'imagem':'breakfast-ga9b591474_1920.jpg','nome': "Ovos com Bacon", 'preco': 31,},
};

// Buscando uma ocorrência dentro de uma string

const msgCarrinho =
  "As opções são acompanhamentas de batatas e arroz, com exceção das opções com caldos e sopas";

let acomp01, acomp02, acomp03;

acomp01 = "batatas fritas";
acomp02 = "batatas rústicas";
acomp03 = "batatas soute";

// Encontrar a ocorrência 'batatas' (só encontra e substitue  uma ocorrência)
let msg01 = msgCarrinho.replace("batata", acomp01);

document.querySelector("#msgCarrinho").innerText = msg01;

// Encontrar todas as ocorrências 'Opções'
let fraseCarrinho = (document.querySelector("#msgCarrinho").innerText = msg01);
let busca = /opções/gi;
let msg02 = fraseCarrinho.replace(busca, "escolhas");
document.querySelector("#msgCarrinho").innerText = msg02;

/*------------------------------------------------------*/

// document.querySelector(".item-nome span").innerText = carrinho["item1"].nome;
// document.querySelector(".item-preco span").innerText = `RS ${carrinho[
//   "item1"
// ].preco.toFixed(2)}`;
// document.querySelector(
//   ".item-imagem"
// ).innerHTML = `<img src='/images/produtos/salad-gf22844a91_1920.jpg' alt='Salada Mix' class='w-100' />`;

Object.keys(carrinho).forEach((key, i) => {
  document.querySelector(`.item-carrinho-${i} .item-nome span`).innerText = carrinho[key].nome
  document.querySelector(`.item-carrinho-${i} .item-imagem`).innerHTML = `<img src='/images/produtos/${carrinho[key].imagem}' alt='Salada Mix' class='w-100' />`
  document.querySelector(`.item-carrinho-${i} .item-preco span`).innerText = `R$ ${carrinho[key].preco.toFixed(2)}`
  document.querySelector(`.item-carrinho-${i} .item-total span`).innerText = `R$ ${carrinho[key].preco.toFixed(2)}`
  // total += carrinho[key].preco;
  console.log(`Chave: ${key}`);
  console.log(`${key} : ${carrinho[key].nome}`);
});

/*Criando Elemento HTML*/
 let p = document.createElement('p')
 p.style = 'color:brown'
 p.setAttribute('class', 'w-100')
 p.innerText = 'Nossos alimentos passam por uma rigorosa de qualidade'
 document.querySelector('#mensagem').appendChild(p)

/*Percorrendo o objeto*/
// Exemplo1
for (const key of Object.keys(carrinho)) {
  // console.log(key);
  console.log(`${key} : ${carrinho[key].nome}`);
}
console.log('');
// Exemplo2
let total = 0

Object.keys(carrinho).forEach((key) => {
  total += carrinho[key].preco;
  console.log(total.toFixed(2));
  console.log(`${key} : ${carrinho[key].nome}`);
});

// Alternativa 1

// var inputNumber = document.querySelector(".input-item-qtd");
// inputNumber.addEventListener("change", () => {
//   let total = carrinho["item1"].preco * this.inputNumber.value;
//   document.querySelector(".item-total span").innerText = `R$ ${total.toFixed(2)}`;
// });

// Alternativa 2

// let inputNumber = document.querySelector(".input-item-qtd");
// inputNumber.addEventListener("change", (e) => {
//   let total = carrinho["item1"].preco * e.target.value;
//   document.querySelector(".item-total span").innerText = `R$ ${total.toFixed(2)}`;
// });

// Alternativa 3

// let inputNumber = document.querySelector(".input-item-qtd");

// inputNumber.addEventListener("change", function() {
//   let total = carrinho["item1"].preco * this.value;
//   document.querySelector(".item-total span").innerText = `R$ ${total.toFixed(2)}`;
// });

// Alternativa 4

let inputNumber = document.querySelector(".input-item-qtd");

inputNumber.addEventListener("change", (e) => {
  let total = carrinho["item1"].preco * e.target.value;
  document.querySelector(".item-total span").innerText = `R$ ${total.toFixed(
    2
  )}`;
});
