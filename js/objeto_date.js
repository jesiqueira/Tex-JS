let n = new Date('December 22, 1980 03:04:55')

let x = new Date('1980-12-17T04:06:22')

let y = new Date('1980,12,17')

let w = new Date()

console.log(n)
console.log(x)
console.log(y)
console.log(w)
console.log(w.getTime())

let meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

let seman = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Set', 'Sab']

function dataHoje() {
    let hoje = new Date()
    let diaSemana = hoje.getDay()
    let diaMes = hoje.getDate().toString()
    diaMes = diaMes.length == 1 ? `0${diaMes}` : diaMes
    let mesDoAno = hoje.getMonth().toString()
    // mesDoAno = mesDoAno.length == 1 ? `0${mesDoAno}` : mesDoAno
    let anoAtual = hoje.getFullYear()
    let dataAtual = `${diaMes}/${meses[mesDoAno]}/${anoAtual}`
    return dataAtual
}

function inicio() {
    let tempo = new Date()
    inicio = tempo.getTime()
    console.log(inicio);
    return inicio
}

let tempoInicial = inicio()

document.querySelector('#btnFim').addEventListener('click', () => {
    let fim = Date.now()
    let tempoDecorrido = (fim - tempoInicial)/1000
    document.querySelector('.p3').innerText = tempoDecorrido
})
// console.log(`Data atual: ${dataHoje()}`)
document.querySelector('.p1').innerText = dataHoje()
