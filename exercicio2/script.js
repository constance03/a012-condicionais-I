// Escreva um código que receba três valores. Uma idade, um booleano que responda se a pessoa terminou ou não o ensino médio, 
// e um booleano que responda se a pessoa está cursando alguma faculdade.
let idade = prompt("Qual sua idade?")
let isMaiorIdade = confirm("Terminou o ensino médio?")
let isCursandoOutraFaculdade = confirm("Esta cursando outra faculdade?")

// Crie um if que imprima que a afirmacão é verdadeira, e um else para imprimir que a afirmacão não é verdadeira:
// Se a pessoa tem 18 anos ou mais;
if (idade >= 18) {
    console.log("Sim, é maior de idade");
} else{
	console.log("É menor de idade");
}

// Se a pessoa terminou o ensino médio;
if (isMaiorIdade) {
    console.log("Terminou o ensino médio");
} else {
    console.log("Não terminou o ensino médio");
}

// Se a pessoa NÃO está cursando alguma faculdade;
if (!isCursandoOutraFaculdade) {
    console.log("Não esta cursando outra faculdade");
} else {
    console.log("Está cursando outra faculdade");
}