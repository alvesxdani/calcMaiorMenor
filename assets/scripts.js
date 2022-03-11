var num1 = parseInt(prompt("Digite o primeiro número:"));
var num2 = parseInt(prompt("Digite o segundo número:"));

console.log(num1+num2);

function calc() {
    
    let total = document.querySelector("#resultado");

    // Verificação do Igual
    let msgIgual = ((num1==num2) ? "são iguais" : "não são iguais");

    // Verificação do maior e menor 10
    if((num1+num2) > 10) msgMaiorMenor10 = " que é maior que 10";
    else msgMaiorMenor10 = " que é menor que 10";

    // Verificação do maior e menor 20
    if((num1+num2) < 20) msgMaiorMenor20 = " é menor que 20."
    else msgMaiorMenor20 = " é maior que 20."
    
    total.textContent = "As duas entradas " + msgIgual + ", a soma é: " + (num1+num2) + "," + msgMaiorMenor10 + " e " + msgMaiorMenor20;
}

calc();
