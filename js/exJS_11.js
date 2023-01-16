console.log('Teste file js')
/*IMPORT*/

// Alternativa 2

let { trocaTurno } = await import('./modules/modules.js')
// console.log(msg('Aula de JavaScript'))
// console.log(msg02)

let t1Txt, t2Txt, st1Txt, st2Txt, btnConfTurno, btnConfSetor, t1, t2, st1, st2, temp

t1Txt = document.querySelector('#func01-turno')
t2Txt = document.querySelector('#func02-turno')
st1Txt = document.querySelector('#func01-setor')
st2Txt = document.querySelector('#func02-setor')

// t1Txt.value = `${t1}hs`
//     document.querySelector('#info1-00 span:nth-of-type(1)').innerText = `${t1}hs`
//     t2Txt.value = `${t2}hs`
//     document.querySelector('#info1-01 span:nth-of-type(1)').innerText = `${t2}hs`

trocaTurno(t1Txt, t2Txt, document.querySelector('#info1-00 span:nth-of-type(1)'), document.querySelector('#info1-01 span:nth-of-type(1)'))


document.querySelector('#btnConfTurno').addEventListener('click', function () {
    trocaTurno(t1Txt, t2Txt, document.querySelector('#info1-00 span:nth-of-type(1)'), document.querySelector('#info1-01 span:nth-of-type(1)'))
})

document.querySelector('#info1-00 span:nth-of-type(2)').innerText = st1Txt.value
document.querySelector('#info1-01 span:nth-of-type(2)').innerText = st2Txt.value

document.querySelector('#btnConfSetor').addEventListener('click', function () {
    document.querySelector('#info1-00 span:nth-of-type(2)').innerText = st1Txt.value
    document.querySelector('#info1-01 span:nth-of-type(2)').innerText = st2Txt.value
})

// document.querySelector('#btnConfSetor').addEventListener('click', function () {
//     temp = st1Txt.value
//     st1Txt.value = st2Txt.value
//     document.querySelector('#info1-00 span:nth-of-type(2)').innerText = st1Txt.value
//     st2Txt.value = temp
//     document.querySelector('#info1-01 span:nth-of-type(2)').innerText = st2Txt.value
// })

let anterior = 0
document.querySelectorAll('input[type=radio').forEach((e, i) => {
    e.onclick = function () {
        // console.log(this);
        i == 0 ? anterior = 1 : null
        if (e.checked) {
            console.log(i)

            document.querySelector(`.dupla:nth-of-type(${i + 1})`).classList.remove('bg-light')
        }
        document.querySelector(`.dupla:nth-of-type(${anterior + 1})`).classList.add('bg-light')
        anterior = i
    }
})
