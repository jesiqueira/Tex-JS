// Alternativa 1
// export const msg02 = 'Seja bem vindo'

// export function msg(aula){
//     return `${aula}`
// }

// alternativa 2

const msg02 = 'Seja bem vindo'

function msg(aula) {
    return aula
}


function trocaTurno() {
    t1 = t1 + t2
    t2 = t1 - t2
    t1 = t1 - t2
    t1Txt.value = `${t1}hs`
    document.querySelector('#info1-00 span:nth-of-type(1)').innerText = `${t1}hs`
    t2Txt.value = `${t2}hs`
    document.querySelector('#info1-01 span:nth-of-type(1)').innerText = `${t2}hs`
}

export { trocaTurno }