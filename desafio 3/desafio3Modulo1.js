
// 3) Faça um programa que calcule e imprima o salário salário a ser transferido para um funcionário.
// Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
// O salário salário a ser transferido é calculado da seguinte maneira: 
   
//    valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios

// Para calcular o percentual de imposto segue as aliquotas:

//     De R$ 0.00 a R$ 1100.00 = 5.00%
//     De R$ 1100.01 a R$ 2500.00 = 10.00%
//     Maior que R$ 2500.00 = 15.00%

//     Exemplo:
//         Entrada:
//             2000
//             250

//         Saída:
//             2050.00

const { gets, print } = require('./auxiliares-des3.js');

// Recebe o valor bruto do salário e o adicional dos benefícios
const salarioBruto = gets();
const adicionalBeneficios = gets();

// Calcula o salário líquido
let salarioLiquido = 0;

// Calcula o percentual de imposto com base na faixa salarial
if (salarioBruto <= 1100.00) {
    salarioLiquido = salarioBruto - (0.05 * salarioBruto);
} else if (salarioBruto <= 2500.00) {
    salarioLiquido = salarioBruto - (0.10 * salarioBruto);
} else {
    salarioLiquido = salarioBruto - (0.15 * salarioBruto);
}

// Adiciona o adicional dos benefícios ao salário líquido
salarioLiquido += adicionalBeneficios;

// Formata o resultado com duas casas decimais
salarioLiquido = salarioLiquido.toFixed(2);

// Imprime o salário líquido
print(salarioLiquido);
