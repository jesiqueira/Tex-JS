console.log("Testando JS");

const btnConfirma = document.querySelector("#btnConfirma");
const nomeVisitante = document.querySelector("#nomeVisitante");
const mensagem = document.querySelector("#mensagem");

// console.log(btnConfirma, nomeVisitante);

btnConfirma.onclick = function () {
  //   console.log(nomeVisitante.value);
  mensagem.style.display = "block";
  mensagem.textContent = `Olá ${nomeVisitante.value}, seja bem vindo! 😉😱`;
};
