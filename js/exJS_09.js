console.log('teste')
let carrinho = {
    item1: {
        imagem: 'salad-374173_1920.jpg',
        nome: 'Salada Mix',
        preco: 12,
        quantidade: '0',
        total: `R$ ${0}`,
    },
    item2: {
        imagem: 'beef-g66eb2a540_1920.jpg',
        nome: 'Carne Grelhada',
        preco: 25,
        quantidade: '0',
        total: `R$ ${0}`,
    },
    item3: {
        imagem: 'breakfast-ga9b591474_1920.jpg',
        nome: 'Ovos com Bacon',
        preco: 31,
        quantidade: '0',
        total: `R$ ${0}`,
    }, 
    item4: {
        imagem: 'salmon-g0bb6a9f46_1920.jpg',
        nome: 'Salmão grelhado',
        preco: 78,
        quantidade: '0',
        total: `R$ ${0}`,
    },
    criarImagem: function (url, nome, obj) {
        let imagem = new Image(url, nome, obj)
        imagem.src = url
        imagem.setAttribute('class', 'w-100')
        imagem.alt = nome
        obj.appendChild(imagem)
    },
    criaInputNumber: function (obj, key,i) {
        let inputNumber = document.createElement('input')
        inputNumber.type = 'number'
        inputNumber.setAttribute('class', 'w-50 border-0 bg-light')
        inputNumber.min = '0'
        inputNumber.max = '10'
        inputNumber.value = '0'
        obj.appendChild(inputNumber)

        inputNumber.onchange = function(){
          let total=carrinho[key].preco * this.value
          document.querySelector(`.item-carrinho-${i} .item-total`).innerHTML=`R$ ${total.toFixed(2)}`
        }
    },
    criaSpan: function(key, otherKey, obj){
      var span = document.createElement('span')
      span.innerText = carrinho[key][otherKey]
      obj.appendChild(span)
    }
}

// Buscando uma ocorrência dentro de uma string

const msgCarrinho = 'As opções são acompanhamentas de batatas e arroz, com exceção das opções com caldos e sopas'

let acomp01, acomp02, acomp03

acomp01 = 'batatas fritas'
acomp02 = 'batatas rústicas'
acomp03 = 'batatas soute'

// Encontrar a ocorrência 'batatas' (só encontra e substitue  uma ocorrência)
let msg01 = msgCarrinho.replace('batata', acomp01)

document.querySelector('#msgCarrinho').innerText = msg01

// Encontrar todas as ocorrências 'Opções'
let fraseCarrinho = (document.querySelector('#msgCarrinho').innerText = msg01)
let busca = /opções/gi
let msg02 = fraseCarrinho.replace(busca, 'escolhas')
document.querySelector('#msgCarrinho').innerText = msg02

/*------------------------------------------------------*/

Object.keys(carrinho).forEach((key, i) => {
    // console.log(i, 'x');
    var divItem = document.createElement('div')
    divItem.setAttribute('class', `item-carrinho-${i} row mt-2`)

    Object.keys(carrinho[key]).forEach((otherKey, ii) => {
        // console.log(otherKey);
        var item = document.createElement('div')
        item.setAttribute('class', `col item-${otherKey}`)
        ii === 0 ? carrinho['criarImagem'](`/images/produtos/${carrinho[key].imagem}`, carrinho[key].nome, item) : 
        ii === 3 ? carrinho['criaInputNumber'](item, key, i) : carrinho['criaSpan'](key, otherKey, item)

        // (item.innerText = carrinho[key][otherKey])

        divItem.appendChild(item)
    })
    document.querySelector('#itens-carrinho').appendChild(divItem)
    // console.log(`${key} : ${carrinho[key].nome}`);
})
