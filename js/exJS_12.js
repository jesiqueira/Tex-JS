import { trocaSetor } from './modules/modules.js'

console.log('Teste file js')
/*IMPORT*/

// Alternativa 2

let { trocaTurno } = await import('./modules/modules.js')
// console.log(msg('Aula de JavaScript'))
// console.log(msg02)

let t1Txt, t2Txt, st1Txt, st2Txt, btnConfTurno, btnConfSetor, t1, t2, st1, st2, temp, ativo, anterior, duplas, listOn, listOff

t1Txt = document.querySelector('#func01-turno')
t2Txt = document.querySelector('#func02-turno')
st1Txt = document.querySelector('#func01-setor')
st2Txt = document.querySelector('#func02-setor')
t1 = document.querySelector('#func01-extra')
t2 = document.querySelector('#func02-extra')

// t1Txt.value = `${t1}hs`
//     document.querySelector('#info1-00 span:nth-of-type(1)').innerText = `${t1}hs`
//     t2Txt.value = `${t2}hs`
//     document.querySelector('#info1-01 span:nth-of-type(1)').innerText = `${t2}hs`


duplas = {
    dupla0 : ['Estela Martins', 'Adonis Santos'],
    dupla1 : ['Cleonildo Amarante', 'Pilar Detomasi'],
    dupla2 : ['Francis Albieri', 'Portella Afonso Silva']
}

trocaTurno(t1Txt, t2Txt, document.querySelector('#info1-00 span:nth-of-type(1)'), document.querySelector('#info1-01 span:nth-of-type(1)'))

document.querySelector('#btnConfTurno').addEventListener('click', function () {
    trocaTurno(t1Txt, t2Txt, document.querySelector('#info1-00 span:nth-of-type(1)'), document.querySelector('#info1-01 span:nth-of-type(1)'))
})

trocaSetor(st1Txt, st2Txt, document.querySelector('#info1-00 span:nth-of-type(2)'), document.querySelector('#info1-01 span:nth-of-type(2)'))
// document.querySelector('#info1-00 span:nth-of-type(2)').innerText = st1Txt.value
// document.querySelector('#info1-01 span:nth-of-type(2)').innerText = st2Txt.value

document.querySelector('#btnConfSetor').addEventListener('click', function () {
    trocaSetor(st1Txt, st2Txt, document.querySelector('#info1-00 span:nth-of-type(2)'), document.querySelector('#info1-01 span:nth-of-type(2)'))
    // document.querySelector('#info1-00 span:nth-of-type(2)').innerText = st1Txt.value
    // document.querySelector('#info1-01 span:nth-of-type(2)').innerText = st2Txt.value
})

document.querySelector('#btnConfTipoTurno').addEventListener('click', function () {
    temp = t1.value
    t1.value = t2.value
    document.querySelector('#info1-00 span:nth-of-type(3)').innerText = t1.value
    t2.value = temp
    document.querySelector('#info1-01 span:nth-of-type(3)').innerText = t2.value
})
// document.querySelector('#btnConfSetor').addEventListener('click', function () {
//     temp = st1Txt.value
//     st1Txt.value = st2Txt.value
//     document.querySelector('#info1-00 span:nth-of-type(2)').innerText = st1Txt.value
//     st2Txt.value = temp
//     document.querySelector('#info1-01 span:nth-of-type(2)').innerText = st2Txt.value
// })

anterior = 0
ativo = 0
listOn = ['border', 'border-4', 'border-warning']
listOff = []

document.querySelectorAll('input[type=radio').forEach((e, i) => {
    // e.checked && i == 0 ? (anterior = i) : null

    e.onchange = function () {

        i == 0 ? anterior = 1 : null
        document.querySelector(`.dupla-${i}`).classList.remove('bg-light')
        document.querySelector(`.dupla-${i}`).classList.add(...listOn)
        document.querySelector(`.dupla-${anterior}`).classList.remove(...listOn)
        anterior = i
        ativo=i
        document.querySelector('label[for=func-01]').innerHTML = duplas[`dupla${i}`][0]
        document.querySelector('label[for=func-02]').innerHTML = duplas[`dupla${i}`][1]
    }
})
