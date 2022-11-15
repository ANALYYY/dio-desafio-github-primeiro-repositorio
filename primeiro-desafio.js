/*Faça um programa para calcular o valor gasto de uma viagem.

Voçê terá 3 variáveis. Sendo elas:
- 1 Preço do combustível;
- 2 Gasto médio de combustível do carro por KM;
- 3 Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem*/


let preco = parseFloat(prompt("Preço do combustível"));
let gastoKm =  parseFloat(prompt("Gasto médio de combustível do carro por KM"));
let distancia = parseInt(prompt("Distância em KM da viagem"));

const total = (preco*gastoKm)/distancia;

console.log(total);











