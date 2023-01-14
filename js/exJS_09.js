console.log("teste");
let carrinho = {
  item1: {
    imagem: "salad-374173_1920.jpg",
    nome: "Salada Mix",
    preco: 12,
    quantidade: 1,
    total: 1,
  },
  item2: {
    imagem: "beef-g66eb2a540_1920.jpg",
    nome: "Carne Grelhada",
    preco: 25,
    quantidade: 1,
    total: 1,
  },
  item3: {
    imagem: "breakfast-ga9b591474_1920.jpg",
    nome: "Ovos com Bacon",
    preco: 31,
    quantidade: 1,
    total: 1,
  },
  criarImagem: function () {
    let imagem = new Image(url, nome, obj);
    imagem.src = url;
    imagem.setAttribute("class", "w-100");
    imagem.alt = nome;
    obj.appendChild(imagem);
  },
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

Object.keys(carrinho).forEach((key, i) => {
  // console.log(i, 'x');
  var divItem = document.createElement("div");
  divItem.setAttribute("class", `item-carrinho-${i} row mt-2`);
  Object.keys(carrinho[key]).forEach((otherKey, ii) => {
    // console.log(otherKey);
    var item = document.createElement("div");
    item.setAttribute("class", `col item-${otherKey}`);

    ii === 0
      ? carrinho["criarImagem"](carrinho[key].imagem, carrinho[key].nome, item)
      : (item.innerText = carrinho[key][otherKey]);
    divItem.appendChild(item);
  });
  document.querySelector("#itens-carrinho").appendChild(divItem);
  // console.log(`${key} : ${carrinho[key].nome}`);
});
