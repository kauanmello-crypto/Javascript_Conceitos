const entrada = require ('readline-sync');
 
const produto = entrada.question ("Digite o produto: ");
const quantidadePorHora = entrada.questionInt("Digite a quantidade produzida por hora: ");
const HorasTrabalhadas = entrada.questionInt("Digite as horas trabalhadas: ");

const total = quantidadePorHora * HorasTrabalhadas

console.log(`\n === RELATORIO DE PRODUCAO ===`);
console.log(` Produto: ${produto}`);
console.log(` Producao por hora: ${quantidadePorHora} por horas`);
console.log(` horas trabalhadas: ${HorasTrabalhadas} horas`);
console.log(` total de pecas produzidas: ${total} pecas`);

