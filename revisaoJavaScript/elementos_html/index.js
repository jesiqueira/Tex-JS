/*

*/
console.log('Salve JS!');
// console.log(document.querySelector('#p01'));
// console.log(document.querySelector('#p01').innerText);
const p01 = document.querySelector('#p01')
console.log(p01.innerText);
p01.classList.add('paragrafo', 'text01')
p01.style.fontWeight = 'bold'
p01.style.textTransform = 'uppercase'
p01.classList.remove('text01')

const lista = document.querySelector('.lista')
// const itemlista = lista.querySelector('li')
const itemlista = lista.querySelectorAll('li')
console.log(`A lista possui ${itemlista.length} itens`);
// itemlista.innerHTML = 'Item 1'

itemlista.forEach( (e,i) =>{
    // console.log(e);
    // console.log(i);
    itemlista[i].innerText = `Item ${i}`
    itemlista[i].setAttribute('class', 'item')

    document.querySelectorAll('.item')[i].onclick = ((e) =>{
        document.querySelector('#mensagem').innerHTML = e.target.innerHTML
    })
})
// itemlista.forEach(function(n){
//     console.log(n);
// })



// Objeto

const carro ={
    cor: 'prata',
    portas: 5,
    caracteristicas : ['Câmbio Esportivo', 'Teto solar'],
    drivers: {'driver1': 'Speed Racer', 'driver2': 'Corredor x', 'driver3': 'Vin Diesel'}
}
const msg = document.querySelector('.mensagem1')
// msg.innerHTML = `Meu carro é ${carro.cor} e tem ${carro.caracteristicas[0]} e esta sendo dirigido por ${carro.drivers.driver3}`

function msgCarro(itens, drivers){
    let msg = `Meu carro é ${carro.cor} e tem ${carro.caracteristicas[itens]} e esta sendo dirigido por ${carro.drivers[drivers]}`
    return msg
}

// msg.innerHTML = msgCarro(0, 'driver3')
msg.innerHTML = msgCarro(1, 'driver1')

/*Data - md*/ 
console.log(Date.now());

document.querySelector('#btnInicio').onclick = () =>{
    localStorage.setItem('tempoInicial',Date.now())
}
document.querySelector('#btnFim').onclick = () =>{
    alert(Date.now())
    localStorage.removeItem('tempoInicial')
}

