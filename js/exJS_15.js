console.log('Testando JS')

const btnConfirma = document.querySelector('#btnConfirma')
const nomeVisitante = document.querySelector('#nomeVisitante')
const mensagem = document.querySelector('#mensagem')

function verificaUser() {
    document.querySelector('.user').innerHTML = localStorage.getItem('user')
    document.querySelector('#box02').classList.remove('hide')
    document.querySelector('#box01').classList.add('hide')
    document.querySelector('#box02 p').innerHTML = `oi ${localStorage.getItem('user')}, seja bem vindo`
}

function sair() {
    document.querySelector('#box02').classList.add('hide')
    document.querySelector('#box01').classList.remove('hide')
    document.querySelector('.user').innerHTML = ''
    document.querySelector('.sair').classList.add('hide')
}

// function f_teste(){
//     sessionStorage.setItem('salvarTxt', txtConfirma.value)
// }
// sessionStorage.getItem('salvaTxt') ? txtConfirma.value = sessionStorage.getItem('salvarTxt') : null
// txtConfirma.addEventListener('keyup', f_teste)


document.querySelector('.sair').style.cursor = 'pointer'
document.querySelector('.sair').addEventListener('click', sair)
localStorage.user ? verificaUser() : null

localStorage.user ? verificaUser() : null

btnConfirma.onclick = function () {
    mensagem.style.display = 'block'
    mensagem.textContent = `Oi ${nomeVisitante.value}, seja bem vindo!`
    localStorage.setItem('user', nomeVisitante.value)
    document.querySelector('.user').innerHTML = localStorage.getItem('user')
    document.querySelector('.sair').classList.remove('hide')
}
