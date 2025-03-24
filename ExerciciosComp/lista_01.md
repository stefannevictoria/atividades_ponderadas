# Questões objetivas
**1) Considerando a execução do código abaixo, indique a alternativa correta e justifique sua resposta.**
```javascript
console.log(x);
var x = 5;
console.log(y);
let y = 10;
```
***a) A saída será undefined seguido de erro***

b) A saída será 5 seguido de 10

c) A saída será undefined seguido de undefined

d) A saída será erro em ambas as linhas que utilizam console.log

**RESPOSTA:** A alternativa correta é a a). Isso porque a variável "var" não possui hierarquia, isto é, pode ser chamada em qualquer escopo do código. Assim, a saída será undefined pelo fato do valor ter sido atribuído à variável após chama-la. Já a variável "let" possui hierarquia, podendo somente ser chamada no escopo em que está inserida. Desse modo, a saída será erro, visto que tal variável foi chamada em um escopo na qual não está inserida.


**2) O seguinte código JavaScript tem um erro que impede sua execução correta. Analise e indique a opção que melhor corrige o problema. Justifique sua resposta.**

```javascript
function soma(a, b) {
    if (a || b === 0) {
        return "Erro: número inválido";
    }
    return a + b;
}
console.log(soma(2, 0));
```

***a) Substituir if (a || b === 0) por if (a === 0 || b === 0)***

b) Substituir if (a || b === 0) por if (a === 0 && b === 0)

c) Substituir if (a || b === 0) por if (a && b === 0)

d) Remover completamente a verificação if (a || b === 0)

**RESPOSTA:** A alternativa correta é a a). O erro no código que impede a correta execução é o de que o parâmetro "a" não está definido corretamete, já que não tem nenhum valor atribuido à esse parâmetro. Assim somente a afirmação "b === 0" seria verificada e, caso verdadeira, imprimiria a mensagem. 

______
**3) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.**
```javascript
function calcularPreco(tipo) {
    let preco;

    switch(tipo) {
        case "eletrônico":
            preco = 1000;
        case "vestuário":
            preco = 200;
            break;
        case "alimento":
            preco = 50;
            break;
        default:
            preco = 0;
    }

    return preco;
}

console.log(calcularPreco("eletrônico"));
```

a) O código imprime 1000.

***b) O código imprime 200.***

c) O código imprime 50.

d) O código gera um erro.

**RESPOSTA:** A alternativa correta é a b), visto que, apesar do console.log estar requerindo a impressão do preço do "eletrônico" (1000), a função possui um erro, que é a falta do "break" após o preço do eletrônico. Assim, o código continuaria e imprime o próximo valor (200). 

______
**4) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.**
```javascript
let numeros = [1, 2, 3, 4, 5];

let resultado = numeros.map(x => x * 2).filter(x => x > 5).reduce((a, b) => a + b, 0);

console.log(resultado);
```
a) 0

b) 6

c) 18

***d) 24***

**RESPOSTA:** A alternativa correta é a d). No código, os números do array serão todos multiplicados por 2. O novo array ficará "[2, 4, 6, 8, 10]". Após isso, os números maiores que 5 desse novo array (6, 8 e 10) serão filtrados e somados. Assim, 6+8+10=24. 

______
**5) Qual será o conteúdo do array lista após a execução do código? Indique a alternativa correta e justifique sua resposta.**

```javascript
let lista = ["banana", "maçã", "uva", "laranja"];
lista.splice(1, 2, "abacaxi", "manga");
console.log(lista);
```

a) ["banana", "maçã", "uva", "abacaxi", "manga", "laranja"]

b) ["banana", "abacaxi", "manga"]

***c) ["banana", "abacaxi", "manga", "laranja"]***

d) ["banana", "maçã", "uva", "abacaxi", "manga"]

**RESPOSTA:** A alternativa correta é a c). O "splice" está sendo utilizado para remover e substituir elementos do array, o modificando. Neste código, foram removidos 2 elementos da lista, começando pelo elemento 1 (maçã), e substituindo esse elementos pelos outros dois determinados (abacaxi e manga).

______
**6) Abaixo há duas afirmações sobre herança em JavaScript. Indique a alternativa correta e justifique sua resposta**

I. A herança é utilizada para compartilhar métodos e propriedades entre classes em JavaScript, permitindo que uma classe herde os métodos de outra sem a necessidade de repetir código.  
II. Em JavaScript, a herança é implementada através da palavra-chave `extends`.


a) As duas afirmações são verdadeiras, e a segunda justifica a primeira.

***b) As duas afirmações são verdadeiras, mas a segunda não justifica a primeira.***

c) A primeira afirmação é verdadeira, e a segunda é falsa.

d) A primeira afirmação é falsa, e a segunda é verdadeira.

**RESPOSTA:** A alternativa correta é a b), visto que ambas as afirmações são verdadeiras. Em POO, a herança permite compartilhar métodos entre as classes. Entretanto, a palavra-chave `extends` é utilizada para implementar herança, mas por si só não justifica o conceito de herança.

______
**7) Dado o seguinte código. Indique a alternativa correta e justifique sua resposta.**

```javascript
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

class Funcionario extends Pessoa {
  constructor(nome, idade, salario) {
    super(nome, idade);
    this.salario = salario;
  }

  apresentar() {
    super.apresentar();
    console.log(`Meu salário é R$ ${this.salario}.`);
  }
}
```


I) A classe Funcionario herda de Pessoa e pode acessar os atributos nome e idade diretamente.  
II) O método `apresentar()` da classe Funcionario sobrepõe o método `apresentar()` da classe Pessoa, mas chama o método da classe pai usando `super`.  
III) O código não funciona corretamente, pois Funcionario não pode herdar de Pessoa como uma classe, já que o JavaScript não suporta herança de classes.

Quais das seguintes afirmações são verdadeiras sobre o código acima?

***a) I e II são verdadeiras.***

b) I, II e III são verdadeiras.

c) Apenas II é verdadeira.

d) Apenas I é verdadeira.

**RESPOSTA:** A alternativa correta é a a). No código, a classe Funcionario herda de Pessoa por meio do "extends", o que permite que os atributos de Pessoa possam ser acessados por Funcionario, validando a primeira afirmação. Além disso, o método apresentar() da classe Funcionario sobrepõe o método da classe Pessoa, mas ainda o chama utilizando super.apresentar(), garantindo a exibição das informações herdadas antes de adicionar o salário, tornando verdadeira a segunda afirmação. A última afirmação é falsa, visto que o código funciona corretamente, pois o JavaScript suporta herança de classes. 

______

**8) Analise as afirmações a seguir. Indique a alternativa correta e justifique sua resposta.**

**Asserção:** O conceito de polimorfismo em Programação Orientada a Objetos permite que objetos de diferentes tipos respondam à mesma mensagem de maneiras diferentes.  
**Razão:** Em JavaScript, o polimorfismo pode ser implementado utilizando o método de sobrecarga de métodos em uma classe.

a) A asserção é falsa e a razão é verdadeira.

***b) A asserção é verdadeira e a razão é falsa.***

c) A asserção é verdadeira e a razão é verdadeira, mas a razão não explica a asserção.

d) A asserção é verdadeira e a razão é verdadeira, e a razão explica a asserção.

**RESPOSTA:** A alternativa correta é a b). O polimorfismo realmente permite que objetos de diferentes classes respondam à mesma mensagem de formas distintas, tornando a asserção verdadeira. No entanto, a razão está errada porque JavaScript não suporta sobrecarga de métodos. O polimorfismo no JavaScript ocorre por sobrescrita de métodos e herança, não por sobrecarga. 
______

# Questões dissertativas
9) O seguinte código deve retornar a soma do dobro dos números de um array, mas contém erros. Identifique os problema e corrija o código para que funcione corretamente. Adicione comentários ao código explicado sua solução para cada problema.

```javascript
function somaArray(numeros) {

    for (i = 0; i < numeros.size; i++) {
        soma = 2*numeros[i];
    }
    return soma;
}
console.log(somaArray([1, 2, 3, 4]));
```

**RESPOSTA:** O código apresentado contém alguns erros. O primeiro erro está no uso de numeros.size, que não é uma propriedade válida para arrays em JavaScript. Para acessar o tamanho de um array, deve-se usar numeros.length. O segundo erro é que a variável soma é sobrescrita a cada iteração do laço, fazendo com que apenas o último valor do array seja considerado, em vez de somar o dobro de todos os números. A solução para isso é inicializar a variável soma antes do laço e, dentro do laço, adicionar o dobro de cada número à variável. Além disso, é importante declarar corretamente a variável i com let ou var para evitar problemas de escopo. O código corrigido ficaria assim:
```javascript
function somaArray(numeros) {
    let soma = 0;  // Inicializa a variável soma antes do laço
    for (let i = 0; i < numeros.length; i++) {  // Corrige a propriedade do tamanho do array
        soma += 2 * numeros[i];  // Soma o dobro de cada número
    }
    return soma;
}
console.log(somaArray([1, 2, 3, 4]));  // Testa o código
```

______

10) Crie um exemplo prático no qual você tenha duas classes:

- Uma classe `Produto` com atributos `nome` e `preco`, e um método `calcularDesconto()` que aplica um desconto fixo de 10% no preço do produto.
- Uma classe `Livro` que herda de `Produto` e modifica o método `calcularDesconto()`, aplicando um desconto de 20% no preço dos livros.

Explique como funciona a herança nesse contexto e como você implementaria a modificação do método na classe `Livro`.

**RESPOSTA:** A classe Produto possui os atributos nome e preco, e um método calcularDesconto() que aplica um desconto fixo de 10% no preço do produto. A classe Livro, que herda de Produto, modifica o método calcularDesconto() para aplicar um desconto de 20% no preço dos livros.

A herança permite que a classe Livro utilize os atributos e métodos da classe Produto. No entanto, a classe Livro pode sobrescrever o método calcularDesconto() para alterar o comportamento de acordo com suas necessidades. Nesse caso, a classe Livro aplica um desconto maior, de 20%, sem modificar a estrutura original da classe Produto.

O código é o seguinte:
```javascript
// Definindo a classe Produto
class Produto {
  // Construtor da classe Produto que recebe nome e preco como parâmetros
  constructor(nome, preco) {
    this.nome = nome;  // Atribui o nome passado para o atributo 'nome' da instância
    this.preco = preco;  // Atribui o preco passado para o atributo 'preco' da instância
  }

  // Método calcularDesconto da classe Produto
  calcularDesconto() {
    return this.preco * 0.9; // Aplica um desconto de 10% (preço * 0.9) e retorna o valor com desconto
  }
}

// Definindo a classe Livro que herda de Produto
class Livro extends Produto {
  // Construtor da classe Livro que recebe nome e preco como parâmetros
  constructor(nome, preco) {
    super(nome, preco); // Chama o construtor da classe Produto para inicializar 'nome' e 'preco'
  }

  // Sobrescrevendo o método calcularDesconto da classe Produto
  calcularDesconto() {
    return this.preco * 0.8; // Aplica um desconto de 20% (preço * 0.8) e retorna o valor com desconto
  }
}
```

Aqui, a classe Produto define os atributos nome e preco e implementa o método calcularDesconto(), que aplica um desconto de 10%. A classe Livro, ao herdar de Produto, utiliza a palavra-chave super para chamar o construtor da classe Produto, garantindo que o nome e o preço sejam definidos corretamente. Além disso, a classe Livro sobrescreve o método calcularDesconto() para aplicar um desconto de 20%, substituindo o comportamento padrão de 10% definido na classe Produto.