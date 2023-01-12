console.log("teste");
let carrinho = {
  item1: { nome: "Salada Mix", preco: 12 },
  item2: { nome: "Carne Grelhada", preco: 25 },
  item3: { nome: "Ovos com Bacon", preco: 31 },
};

document.querySelector(".item-nome span").innerText = carrinho["item1"].nome;
document.querySelector(".item-preco span").innerText = `RS ${carrinho[
  "item1"
].preco.toFixed(2)}`;
document.querySelector(
  ".item-imagem"
).innerHTML = `<img src='/images/produtos/salad-gf22844a91_1920.jpg' alt='Salada Mix' class='w-100' />`;


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
  document.querySelector(".item-total span").innerText = `R$ ${total.toFixed(2)}`;
});