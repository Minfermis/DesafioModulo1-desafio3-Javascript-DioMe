# Cálculo de Salário Líquido

Este código em JavaScript permite calcular o salário líquido com base em entradas de salário bruto e adicional de benefícios. Ele é composto por funções e etapas de cálculo.

## Funções

### `gets()`

A função `gets` é responsável por obter os valores de entrada sequencialmente a partir do array `entradas`. Ela é usada para capturar o salário bruto e o adicional de benefícios.

### `print(texto)`

A função `print` imprime mensagens no console. Neste caso, é usada para exibir o resultado do salário líquido.

## Variáveis

- `salarioBruto`: Armazena o valor do salário bruto.
- `adicionalBeneficios`: Armazena o valor do adicional de benefícios.
- `salarioLiquido`: Armazena o valor do salário líquido após o cálculo.

## Cálculos

1. O código verifica em qual faixa salarial se encaixa o `salarioBruto` e aplica as seguintes taxas de imposto:
   - Se `salarioBruto` for menor ou igual a 1100.00, a taxa de imposto é de 5%.
   - Se `salarioBruto` estiver entre 1100.01 e 2500.00, a taxa de imposto é de 10%.
   - Caso contrário, a taxa de imposto é de 15%.

2. O código calcula o valor do `salarioLiquido` após a dedução do imposto, adicionando o `adicionalBeneficios`.

3. O resultado é formatado com precisão de duas casas decimais usando o método `toFixed(2)`.

4. Finalmente, o `salarioLiquido` é impresso no console usando a função `print`.

Este código fornece uma maneira simples de calcular o salário líquido com base nas entradas fornecidas, aplicando as taxas de imposto adequadas de acordo com a faixa salarial.
