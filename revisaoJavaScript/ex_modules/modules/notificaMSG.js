const saudacao = 'Ola seja bem vindo!'

function saudacaoUser(User){
    return `Ola ${User}, seja bem vindo!`
}

const tempo = new Date()


export default function dataDehoje(){
    return `${tempo.getDate()}/${tempo.getMonth()+1}/ ${tempo.getFullYear()}`
}

export {saudacao,saudacaoUser}