const entrada = require('readline-sync');

const pecasPorCiclos = entrada.questionInt("Digite o numero de pecas por ciclo: ");

let acumulado = 0;

for (let ciclo = 1; ciclo <= 10; ciclo++) {
    acumulado += pecasPorCiclos;
    console.log (`ciclo ${ciclo} - Producao acumulada: ${acumulado}`);
}

