console.log('Teste file js')
/*IMPORT*/

// Alternativa 2

let { msg, msg02 } = await import('./modules/modules.js')
console.log(msg('Aula de JavaScript'))
console.log(msg02)

let t1Txt, t2Txt, st1Txt, st2Txt, btnConfTurno, btnConfSetor, t1, t2, st1, st2, temp

t1 = 8
t2 = 4

t1Txt = document.querySelector('#func01-turno')
t2Txt = document.querySelector('#func02-turno')
st1Txt = document.querySelector('#func01-setor')
st2Txt = document.querySelector('#func02-setor')



trocaTurno()
document.querySelector('#btnConftrocaTurno').addEventListener('click', function () {
    trocaTurno()
})

st1Txt.value = 'Atendimento/caixa'
document.querySelector('#info1-00 span:nth-of-type(2)').innerText = st1Txt.value
st2Txt.value = 'Diretor'
document.querySelector('#info1-01 span:nth-of-type(2)').innerText = st2Txt.value

document.querySelector('#btnConfSetor').addEventListener('click', function () {
    temp = st1Txt.value
    st1Txt.value = st2Txt.value
    document.querySelector('#info1-00 span:nth-of-type(2)').innerText = st1Txt.value
    st2Txt.value = temp
    document.querySelector('#info1-01 span:nth-of-type(2)').innerText = st2Txt.value
})

let anterior = 0
document.querySelectorAll('input[type=radio').forEach((e, i) => {
    e.onclick = function () {
        // console.log(this);
        if (e.checked) {
            console.log(i)

            document.querySelector(`.dupla:nth-of-type(${i + 1})`).classList.remove('bg-light')
        }
        document.querySelector(`.dupla:nth-of-type(${anterior + 1})`).classList.add('bg-light')
        anterior = i
    }
})
