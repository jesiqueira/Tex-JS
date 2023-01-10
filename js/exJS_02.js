console.log("Testando JS");

let titulo01 = document.getElementById("titulo01");
let titulo01_a = document.getElementsByClassName("titulo"); //mesma classe
let titulo01_b = document.querySelector("h2");
let titulo01_c = document.querySelectorAll("h2"); //mesmo nome de TAG
console.log(titulo01_c[0].innerHTML);
console.log(titulo01_c[1].innerHTML);

titulo01_c[0].innerHTML = "Aula de Lógica! Imprimindo em Tela";
titulo01_c[0].style = "color:brown";
