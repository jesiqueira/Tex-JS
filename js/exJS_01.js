console.log("Hello Word");

let nivel = 0;
let statusContrato = "";
switch (nivel) {
  case 1:
    statusContrato = "Estágio";
    break;
  case 2:
    statusContrato = "Efetivado";
  default:
    statusContrato = "EM Contratação";
    break;
}

console.log(statusContrato);

let i = 0;
let y = 0;

while (i < 5) {
  i++;
  y += i;

  if (i === 3) continue;
  console.log(` ${y} \n+++`);
}
