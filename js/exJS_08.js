console.log("teste");
let carrinho = {
  item1: { 'imagem':'salad-374173_1920.jpg','nome': "Salada Mix", 'preco': 12, 'quantidade': 1, 'total': 1},
  item2: { 'imagem':'beef-g66eb2a540_1920.jpg','nome': "Carne Grelhada", 'preco': 25, 'quantidade': 1, 'total': 1},
  item3: { 'imagem':'breakfast-ga9b591474_1920.jpg','nome': "Ovos com Bacon", 'preco': 31, 'quantidade': 1, 'total': 1},
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
  // document.querySelector(`.item-carrinho-${i} .item-nome span`).innerText = carrinho[key].nome
  // document.querySelector(`.item-carrinho-${i} .item-imagem`).innerHTML = `<img src='/images/produtos/${carrinho[key].imagem}' alt='Salada Mix' class='w-100' />`
  // document.querySelector(`.item-carrinho-${i} .item-preco span`).innerText = `R$ ${carrinho[key].preco.toFixed(2)}`
  // document.querySelector(`.item-carrinho-${i} .item-total span`).innerText = `R$ ${carrinho[key].preco.toFixed(2)}`
  // total += carrinho[key].preco;
  console.log(i, 'x');
  var divItem = document.createElement('div')
  divItem.setAttribute('class', `item-carrinho-${i} row mt-2`)
  Object.keys(carrinho[key]).forEach((otherKey, ii)=>{
    // console.log(otherKey);
    var item =document.createElement('div')
    item.setAttribute('class', `col item-${otherKey}`)
    item.innerText=carrinho[key][otherKey]
    divItem.appendChild(item)
  })
  document.querySelector('#itens-carrinho').appendChild(divItem)
  // console.log(`${key} : ${carrinho[key].nome}`);
});

/*Criando Elemento HTML*/
 let p = document.createElement('p')
 p.style = 'color:brown'
 p.setAttribute('class', 'w-100')
 p.innerText = 'Nossos alimentos passam por uma rigorosa de qualidade'
 document.querySelector('#mensagem').appendChild(p)


{/* <div class="row mt-4 item-carrinho-0">
              <div class="col item-imagem"></div>
              <div class="col item-nome">
                <span></span>
              </div>
              <div class="col item-preco">
                <span></span>
              </div>
              <div class="col item-quantidade">
                <input
                  value="1"
                  type="number"
                  name="item-qtd"
                  class="input-item-qtd w-50 border-0 bg-light"
                  min="0"
                  max="10"
                />
              </div>
              <div class="col item-total">
                <span></span>
              </div>
            </div> */}