const entrada = require('readline-sync');

let total = 0;

for (let hora = 1; hora <= 5; hora++) {
    const producao = entrada.questionInt("Digite a producao da hora" + hora + ":")
    total += producao;
};

const media = acumulado / 5;

console.log("n\ === RELATORIO DE PRODUCAO ===")
console.log(`Total produzido: ${total}`)
console.log(`Media de producao: ${media}`)

