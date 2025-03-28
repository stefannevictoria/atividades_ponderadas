# Questões objetivas

**1)** Considere o seguinte código JavaScript:

```javascript
//EX01
let p = 10;
let q = 3;
let r = 6;

let resultado = (p % q === 1) && (r * 2 > p) || (q + r < p);
console.log(resultado);

const valores = [3, 6, 9, 12, 15];
let produto = 1;

for (let j = 0; j < valores.length; j++) {
  produto *= valores[j];
}

console.log("O produto dos valores é:", produto);


```
Qual das seguintes alternativas melhor descreve o que o código faz?

***A) O código avalia a expressão booleana, imprime `true`, calcula o produto dos números na lista e imprime o resultado no console.***

B) O código avalia a expressão booleana, imprime `false`, calcula o produto dos números na lista e imprime o resultado no console.

C) O código avalia a expressão booleana, imprime `true` e, em seguida, verifica se o número 6 está na lista.

D) O código avalia a expressão booleana, imprime `false` e ordena os valores em ordem crescente.

**RESPOSTA:** A alternativa correta é a a). No código, a expressão bolleana irá avaliar se a divisão de p por q dá resto 1, e se r vezes 2 é maior que p, ou q + r é menor que p. Como a divisão 10/3 (p/q) dá resto 1, e 12 ($2 \cdot r$) é maior que 10 (p) e 9 (p+r) é menor que 10 (p), a expressão é verdadeira e, portanto, imprimirá "true". 
Na segunda parte do código, ocorrerá a multiplicação de todos os valores da lista valores, isto é $3 \cdot 6 \cdot 9 \cdot 12 \cdot 15$, e esse valor será impresso.

______

**2)** O código a seguir contém duas funções que calculam o limite de crédito de um cliente com base nos seus gastos e na renda mensal.

```javascript
// Versão 1 da função de análise de crédito
function analisarCredito1() {
    var compras = [2500, 1200, 800, 100];
    var totalCompras = compras[0];
    var limite = 5000;
    var status = 'aprovado';
    var saldoDisponivel = 0;
    var i = 1;

    do {
        totalCompras += compras[i];
        i++;
    } while (limite >= totalCompras && i < compras.length);

    saldoDisponivel = limite - totalCompras;

    if (saldoDisponivel < 0) {
        status = 'negado';
    }
    console.log(`Seu crédito foi ${status}. Saldo disponível: ${saldoDisponivel}.`);
}
```

```javascript
// Versão 2 da função de análise de crédito
function analisarCredito2() {
    var compras = [2500, 1200, 800, 100];
    var totalCompras = compras[0];
    var limite = 5000;
    var status = 'aprovado';
    var saldoDisponivel = 0;
    var i = 1;

    while (limite >= totalCompras && i < compras.length) {
        totalCompras += compras[i];
        i++;
    }

    saldoDisponivel = limite - totalCompras;

    if (saldoDisponivel < 0) {
        status = 'negado';
    }
    console.log(`Seu crédito foi ${status}. Saldo disponível: ${saldoDisponivel}.`);
}
```
Se ambas as funções forem executadas com os valores fornecidos, qual será a saída exibida no console?

***A) Ambas as funções exibirão: 'Seu crédito foi aprovado. Saldo disponível: 400.'***

B) analisarCredito1() exibirá: 'Seu crédito foi negado. Saldo disponível: -600.', enquanto analisarCredito2() exibirá: 'Seu crédito foi negado. Saldo disponível: -200.'

C) analisarCredito1() exibirá: 'Seu crédito foi negado. Saldo disponível: -200.', enquanto analisarCredito2() exibirá: 'Seu crédito foi aprovado. Saldo disponível: 100.'

D) Ambas as funções exibirão: 'Seu crédito foi aprovado Saldo disponível: 500.'

**RESPOSTA:** A alternativa correta é a a). Em ambas as funções, a soma total das compras será 4600, sendo, portanto, menor que o limite de 5000. Assim, de acordo com o cálculo da linha "saldoDisponivel = limite - totalCompras;", o saldo disponível será de 400 reais (5000 - 4600). Além disso, uma vez que o saldo não é menor que 0, o status do crédito será "aprovado". 

______

**3)** Considere o seguinte trecho de código em JavaScript:
```javascript
//EX03
const idade = 21;

if (idade >= 18 && idade < 60) {
  console.log("Você é um adulto!");
} else if (idade < 18) {
  console.log("Você é menor de idade!");
} else {
  console.log("Você está na melhor idade!");
}
```
Qual das seguintes alternativas melhor descreve o comportamento do código?

A) O código verifica se a idade indica um adulto ou um idoso e exibe a mensagem correspondente.

***B) O código verifica se a idade pertence à faixa adulta. Se for, exibe "Você é um adulto!". Caso contrário, verifica se é menor de idade e exibe "Você é menor de idade!". Se nenhuma das condições anteriores for verdadeira, exibe "Você está na melhor idade!".***

C) O código verifica se a idade está entre 18 e 60 anos e, se for, imprime "Você é um adulto!". Se não estiver nesse intervalo, imprime "Você está na melhor idade!".

D) O código verifica se a idade é menor de 18, entre 18 e 60 ou acima de 60, imprimindo uma mensagem específica para cada caso.

**RESPOSTA:** A alternativa correta é a b). No código, a primeira condição verifica se a idade está entre 18 e 59 anos, se sim, imprime a mensagem "Você é um adulto!". Caso a condição seja falsa, há a verificação da condição se a idade é menor que 18. Caso seja, a mensagem "Você é menor de idade!" é exibida. Caso nenhuma daa duas condições seja verdadeira, a mensagem "Você está na melhor idade!" é exibida. 

______

**4)** Qual será o resultado impresso no console após a execução do seguinte código?
```javascript
//EX04
var energiaDisponivel = 1200;
var bateriaExtra = 400;
var consumoDispositivos = [300, 600, 500, 200, 400];

for (var i = 0; i < consumoDispositivos.length; i++) {
    var consumo = consumoDispositivos[i];

    if (consumo <= energiaDisponivel) {
        console.log("Dispositivo " + (i+1) + " ligado. Energia restante: " + (energiaDisponivel - consumo));
        energiaDisponivel -= consumo;
    } else if (consumo <= energiaDisponivel + bateriaExtra) {
        console.log("Dispositivo " + (i+1) + " ligado com bateria extra. Energia restante: " + ((energiaDisponivel + bateriaExtra) - consumo));
        energiaDisponivel = 0;
        bateriaExtra -= (consumo - energiaDisponivel);
    } else {
        console.log("Dispositivo " + (i+1) + " não pode ser ligado. Energia insuficiente.");
    }
}
```

Escolha a opção que responde corretamente:

A)
Dispositivo 1 ligado. Energia restante: 900

Dispositivo 2 ligado com bateria extra. Energia restante: 700

Dispositivo 3 ligado. Energia restante: 200

Dispositivo 4 ligado com bateria extra. Energia restante: 0

Dispositivo 5 ligado. Energia restante: -200

B)
Dispositivo 1 ligado. Energia restante: 900

Dispositivo 2 ligado com bateria extra. Energia restante: 700

Dispositivo 3 ligado. Energia restante: 200

Dispositivo 4 não pode ser ligado. Energia insuficiente.

Dispositivo 5 não pode ser ligado. Energia insuficiente.

C)
Dispositivo 1 ligado. Energia restante: 900

Dispositivo 2 ligado com bateria extra. Energia restante: 700

Dispositivo 3 ligado. Energia restante: 400

Dispositivo 4 não pode ser ligado. Energia insuficiente.

***D)***
Dispositivo 1 ligado. Energia restante: 900

Dispositivo 2 ligado. Energia restante: 300

Dispositivo 3 ligado com bateria extra. Energia restante: 200

Dispositivo 4 não pode ser ligado. Energia insuficiente.

Dispositivo 5 não pode ser ligado. Energia insuficiente.


**RESPOSTA:** A alternativa correta é a d). Isso porque, no código, a dispositivo 1 será ligado, consumindo 300 unidades de energia (restando 900). O dispositivo 2 consumirá 600 unidades (restando 300). O dispositivo 3 consumirá as 300 restantes e, para ser ligado, usará 200 da bateria extra (restando 200 na bateria). O dispositivo 4 não pode ser ligado pois consome 400 e só há 200 disponíveis. O mesmo vale para o dispositivo 5.

______

**5)** Qual é a principal função do método update() em um jogo desenvolvido com Phaser.js?

Escolha a opção que melhor descreve seu propósito:

A) O método update() é responsável por carregar os assets do jogo antes da cena ser exibida.

***B) O método update() é chamado continuamente a cada quadro (frame) do jogo, sendo usado para atualizar a lógica, movimentação e interações dos objetos na cena.***

C) O método update() renderiza todos os sprites na tela e garante que a física do jogo seja processada corretamente.

D) O método update() é chamado apenas uma vez após a criação da cena, sendo utilizado para configurar variáveis iniciais do jogo.

**RESPOSTA:** A alternativa correta é a b). O método update() é executada toda vez que a tela do jogo é atualizada, ou seja, várias vezes por segundo. Sua função é atualizar o jogo e sua lógica. 
O método responsável por carregar os assets é o preload(), e não o update(), portanto a alternativa "a" está incorreta. Além disso, o método crete() é o utilizado para configurar variáveis, o que tona a alternativa "d" incorreta. Já a alternativa "c" está errada, pois o método update() não é exclusivamente responsável pela randerização e física do jogo. 

______

**6)** Qual é o principal objetivo do módulo Matter.js Physics em Phaser.js?

Escolha a opção que responde corretamente:

***A) Simular física avançada, incluindo corpos rígidos, colisões complexas e interação entre objetos com gravidade e forças.***

B) Gerenciar eventos de entrada do usuário, como cliques e toques na tela, permitindo movimentação de personagens.

C) Renderizar gráficos otimizados para jogos 2D e garantir uma taxa de quadros estável.

D) Criar animações automáticas para sprites e objetos interativos sem necessidade de programação de movimentação.

**RESPOSTA:** A alternativa correta é a a), visto que o módulo Matter.js Physics é um motor de física integrado ao Phaser.js, que permite simular um comportamento físico mais realista nos jogos, como física avançada (corpos com massa e formato definido) e colisões complexas (entre formatos irregulares), por exemplo. 
______

# Questões dissertativas

**7)** Uma loja online deseja implementar um sistema de classificação de pedidos com base no valor total da compra. O sistema deve determinar a categoria de um pedido com as seguintes regras:

```

Pedidos abaixo de R$50,00 → "Frete não disponível!"

Pedidos entre R$50,00 e R$199,99 (inclusive) → "Frete com custo adicional!"

Pedidos de R$200,00 ou mais → "Frete grátis!"
```
Implemente um pseudocódigo que receba o valor total da compra e exiba a classificação correta do frete para o cliente.

**RESPOSTA:** O código é o seguinte: 
```
    variável totalCompra

    Se totalCompra < 50 então: 
        Retornar "Frete não disponível!"
    Senão se totalCompra >= 50 && totalCompra <= 199.99 então:
        Retornar "Frete com custo adicional!"
    Senão
        Retornar "Frete grátis!"

    Fim se
```
______

**8)** Considere a implementação da classe base Veiculo em um sistema de modelagem de veículos. Sua tarefa é implementar, utilizando pseudocódigo, as classes derivadas Carro e Moto, que herdam da classe Veiculo, adicionando atributos específicos e métodos para calcular o consumo de combustível de um carro e de uma moto, respectivamente.

```
Classe Veiculo:
Atributos:

modelo
ano
Método Construtor(modelo, ano):

Define os valores dos atributos modelo e ano com os valores passados como parâmetro.
Método CalcularConsumo():
```
Implementação genérica para cálculo de consumo, a ser sobrescrita pelas subclasses.
Agora, implemente as classes Carro e Moto, garantindo que ambas herdem de Veiculo e possuam métodos específicos para calcular o consumo de combustível com base na quilometragem e eficiência do veículo.

**RESPOSTA:** 
```
Classe Veiculo
    Atributos:
        modelo
        ano

    Método Construtor(modelo, ano)
        Definir modelo ←  modelo
        Definir ano ←  ano

    Método CalcularConsumo()
        Retornar "O veículo ", modelo, "é de ", ano

Classe Carro herda Veiculo
    Atributos:
        quilometragem
        eficiencia

    Método Construtor(modelo, ano, quilometragem, eficiencia)
        Chamar super(modelo, ano)
        Definir quilometragem ←  quilometragem
        Definir eficiencia ← eficiencia

    Método CalcularConsumo()
        Definir consumo = quilometragem / eficiencia
        Retornar "O carro ", modelo, ano, "consumiu ", consumo, "L de combustível para ", quilometragem, "km."

Classe Moto herda Veiculo
    Atributos:
        quilometragem
        eficiencia

    Método Construtor(modelo, ano, quilometragem, eficiencia)
        Chamar super(modelo, ano)
        Definir quilometragem ← quilometragem
        Definir eficiencia ← eficiencia

    Método CalcularConsumo()
        Definir consumo = quilometragem / eficiencia
        Retornar "A moto ", modelo, ano, "consumiu ", consumo, "L de combustível para ", quilometragem, "km."

```
______

**9)** Você é um cientista da NASA e está ajudando no desenvolvimento de um sistema de pouso para sondas espaciais em Marte. Seu objetivo é calcular o tempo necessário para que a sonda reduza sua velocidade até um nível seguro para pouso, considerando uma velocidade inicial de entrada na atmosfera marciana e uma taxa de desaceleração constante causada pelo atrito atmosférico e retrofoguetes.

Entretanto, a sonda não pode ultrapassar um tempo máximo de descida para evitar desvios orbitais, nem pode desacelerar além de um limite mínimo, pois isso poderia causar instabilidade no pouso.

Implemente a lógica dessa simulação em pseudocódigo, considerando a seguinte equação para atualização da velocidade:

Considere a fórumla de atualização velocidade:
```
    velocidade = velocidadeInicial - desaceleracao * tempo
```
Seu programa deve determinar quanto tempo será necessário para que a sonda atinja uma velocidade segura de pouso, sem ultrapassar os limites estabelecidos.

**RESPOSTA:**
```
    Entrada: velocidadeInicial, desaceleracao, tempoMaximo, velocidadeSegura

    tempo = 0
    velocidade = velocidadeInicial

    Enquanto velocidade > velocidadeSegura e tempo < tempoMaximo faça:
        velocidade = velocidadeInicial - desaceleracao * tempo
        tempo = tempo + 1

    Se velocidade <= velocidadeSegura então
        Retornar "Pouso seguro alcançado em " + tempo + " segundos."
    Senão
        Retornar "Tempo máximo excedido. Ajuste a desaceleração."
```
______

**10)** Em um sistema de análise financeira, as operações de investimento de uma empresa podem ser representadas por matrizes, onde cada linha representa um tipo de investimento e cada coluna representa um período de tempo.

A seguir, é fornecida a implementação da função SomarMatrizesInvestimento(matrizA, matrizB), que soma os valores de duas matrizes de investimento. Sua tarefa é implementar uma função semelhante, porém que realize a multiplicação das matrizes de investimento, determinando como os investimentos afetam os resultados ao longo do tempo.

```
Função SomarMatrizesInvestimento(matrizA, matrizB):  
    # Verifica se as matrizes têm o mesmo número de linhas e colunas  
    Se tamanho(matrizA) ≠ tamanho(matrizB) então:  
        Retornar "As matrizes não podem ser somadas. Elas têm dimensões diferentes."  
    Senão:  
        linhas <- tamanho(matrizA)  
        colunas <- tamanho(matrizA[0])  
        matrizResultado <- novaMatriz(linhasA, colunasB)  

        # Loop para percorrer cada elemento das matrizes e calcular a soma  
        Para i de 0 até linhasA-1 faça:  
            Para j de 0 até colunasB-1 faça:  
                matrizResultado[i][j] <- 0  
                Para k de 0 até colunasA-1 faça:  
                    matrizResultado[i][j] <- matrizResultado[i][j] + (matrizA[i][k] * matrizB[k][j])  

        Retornar matrizResultado  

# Exemplo de uso da função  
investimentosAno1 <- [[1000, 2000], [1500, 2500]]  
investimentosAno2 <- [[1200, 1800], [1300, 2700]]  

totalInvestimentos <- SomarMatrizesInvestimento(investimentosAno1, investimentosAno2)  
Escrever("Total de investimentos acumulados:")  
ImprimirMatriz(totalInvestimentos)  
```
Agora, implemente a função MultiplicarMatrizesInvestimento(matrizA, matrizB), que multiplica as duas matrizes, simulando o efeito de diferentes fatores de crescimento e impacto financeiro nos investimentos ao longo do tempo.


**RESPOSTA:**

```
Função MultiplicarMatrizesInvestimento(matrizA, matrizB):
    Se número de colunas de matrizA ≠ número de linhas de matrizB então:
        Retornar "As matrizes não podem ser multiplicadas. Elas tem dimensões diferentes."

    linhasA <- tamanho(matrizA)
    colunasA <- tamanho(matrizA[0])
    colunasB <- tamanho(matrizB[0])

    matrizResultado <- novaMatriz(linhasA, colunasB, inicializada com zeros)

    Para i de 0 até linhasA - 1 faça:
        Para j de 0 até colunasB - 1 faça:
            Para k de 0 até colunasA - 1 faça:
                matrizResultado[i][j] <- matrizResultado[i][j] + matrizA[i][k] * matrizB[k][j]

    Retornar matrizResultado


# Exemplo de uso da função  
investimentosAno1 <- [[1000, 2000], [1500, 2500]]  
investimentosAno2 <- [[1200, 1800], [1300, 2700]]  

totalInvestimentos <- MultiplicarMatrizesInvestimento(investimentosAno1, investimentosAno2)  
Escrever("Total de investimentos multiplicados:")  
ImprimirMatriz(totalInvestimentos)  

```

