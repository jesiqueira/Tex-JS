console.log('teste')

let a = '2323522454'

let email = 'edmar.ade@gmail.com'
let n = 4

console.log(a.padEnd(a.length + 2, '0'))
console.log(a.padEnd(a.length + 2, '0'))
console.log(n.toString().length == 1 ? `0${n}` : n)
console.log(n.toString().length == 1 ? n.toString().padStart(2, '0') : n)

let ultimosDigitos = a.slice(-4)
let mascara = ultimosDigitos.padStart(a.length, '*')
console.log(ultimosDigitos)
console.log(mascara)

document.querySelector('.p1').innerHTML = `Número do Cartão: ${a} <br/> cartão  com mascara: ${mascara} `

let antes = email.substring(0, email.indexOf('@'))
let depois = email.substring(email.indexOf('@'), email.length)
let primeirasLetras = antes.slice(antes.length / 2)
let amtesMask = primeirasLetras.padStart(antes.length, '*')

console.log(antes)
console.log(depois)
console.log(primeirasLetras)
console.log(`${amtesMask} ${depois}`);
document.querySelector('.p2').innerHTML = `Email ${email} <br/> email com mascara:  ${amtesMask}${depois} `


// Math
let nn = 13.5
console.log(Math.sqrt(16));
let paraBaixo = Math.floor(nn)
let paraCima = Math.ceil(nn)
let arrendondamento = Math.round(nn)
console.log('(Math.floor) para o mais baixo valor', paraBaixo);
console.log('(Math.ceil para o mais alto valor', paraCima);
console.log('(Math.round) arrendonda (para baixo até .49, além disso para cima)', arrendondamento);

let c = Math.random().toString(36).substring(2,9)
console.log(c);

document.querySelector('.p3').innerHTML = `O código  é <br/> ${c}`