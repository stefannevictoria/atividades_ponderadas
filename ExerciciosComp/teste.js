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