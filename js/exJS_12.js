// import { trocaSetor } from './modules/modules.js'

console.log('Teste file js')
/*IMPORT*/

// Alternativa 2

let { trocaTurno, trocaSetor, trocaTipoTurno } = await import('./modules/modules.js')
// console.log(msg('Aula de JavaScript'))
// console.log(msg02)

let t1Txt, t2Txt, st1Txt, st2Txt, btnConfTurno, btnConfSetor, t1, t2, st1, st2, temp, ativo, anterior, duplas, listOn, listOff, infoT1, infoT2, infoS1, infoS2, infoTt1, infoTt2

anterior = document.querySelector('.dupla-0')
ativo = 0

function infos(ativo){
    infoT1 = document.querySelector(`.dupla-${ativo} #info1-00 span:nth-of-type(1)`)
    infoT2 = document.querySelector(`.dupla-${ativo} #info1-01 span:nth-of-type(1)`)
    infoS1 = document.querySelector(`.dupla-${ativo} #info1-00 span:nth-of-type(2)`)
    infoS2 = document.querySelector(`.dupla-${ativo} #info1-01 span:nth-of-type(2)`)
    infoTt1 = document.querySelector(`.dupla-${ativo} #info1-00 span:nth-of-type(3)`)
    infoTt2 = document.querySelector(`.dupla-${ativo} #info1-01 span:nth-of-type(3)`)
}

//  Formulário
t1Txt = document.querySelector('#func01-turno')
t2Txt = document.querySelector('#func02-turno')
st1Txt = document.querySelector('#func01-setor')
st2Txt = document.querySelector('#func02-setor')
t1 = document.querySelector('#func01-extra')
t2 = document.querySelector('#func02-extra')


duplas = {
    dupla0: ['Estela Martins', 'Adonis Santos'],
    dupla1: ['Cleonildo Amarante', 'Pilar Detomasi'],
    dupla2: ['Francis Albieri', 'Portella Afonso Silva'],
}

infos(ativo)
trocaTurno(t1Txt, t2Txt, infoT1, infoT2)

document.querySelector('#btnConfTurno').addEventListener('click', function () {
    infos(ativo)
    trocaTurno(t1Txt, t2Txt, infoT1, infoT2)
})

trocaSetor(st1Txt, st2Txt, infoS1, infoS2)

document.querySelector('#btnConfSetor').addEventListener('click', function () {
    infos(ativo)
    trocaSetor(st1Txt, st2Txt, infoS1, infoS2)
})

document.querySelector('#btnConfTipoTurno').addEventListener('click', function () {
    infos(ativo)
    trocaTipoTurno(t1, t2, infoTt1, infoTt2)
    // temp = t1.value
    // t1.value = t2.value
    // document.querySelector('#info1-00 span:nth-of-type(3)').innerText = t1.value
    // t2.value = temp
    // document.querySelector('#info1-01 span:nth-of-type(3)').innerText = t2.value
})

listOn = ['border', 'border-4', 'border-warning']
listOff = []

document.querySelectorAll('input[type=radio').forEach((e, i) => {
    e.onchange = function () {
        // i == 0 ? (anterior = 1) : null
        document.querySelector(`.dupla-${i}`).classList.remove('bg-light')
        document.querySelector(`.dupla-${i}`).classList.add(...listOn)
        anterior.classList.remove(...listOn)
        anterior = document.querySelector(`.dupla-${i}`)
        ativo = i
        document.querySelector('label[for=func-01]').innerHTML = duplas[`dupla${i}`][0]
        document.querySelector('label[for=func-02]').innerHTML = duplas[`dupla${i}`][1]
    }
})
