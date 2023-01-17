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
let t1, t2
t1 = 8
t2 = 4

function trocaTurno(t1Txt, t2Txt, info0, info1) {
    t1 = t1 + t2
    t2 = t1 - t2
    t1 = t1 - t2
    t1Txt.value = `${t1}hs`
    info0.innerText = `${t1}hs`
    t2Txt.value = `${t2}hs`
    info1.innerText = `${t2}hs`
}

function trocaSetor(st1Txt, st2Txt, setor0, setor1) {
    st1Txt.value === st2Txt.value && st1Txt.value !== '' && st2Txt.value !== '' ? alert('Escolha setores diferentes') : (setor0.innerText = st1Txt.value)
    setor1.innerText = st2Txt.value
}

export { trocaTurno, trocaSetor }
