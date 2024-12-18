function Animal(nome, especie) {
    this.nome = nome;
    this.especie = especie;        
}

//Método

Animal.prototype.informativo = function() {
    if (this.especie === "cachorro") {
        console.log(`${this.nome} é um ${this.especie} da raça ${this.raca}`)
    }
        else if (this.especie === "gato") {
            console.log(`${this.nome} é um ${this.especie} ${this.color}`)
        }

        else {
            console.log("Você precisa especificar uma espécie para o seu animal.")
        }
    
}

//Herdeiros

function Cachorro(nome, raca) {
    Animal.call(this, nome, "cachorro");
    this.raca = raca;
}
//Criando o objeto com herança de Animal
Cachorro.prototype = Object.create(Animal.prototype);
Cachorro.prototype.constructor = Cachorro;

function Gato(nome, color) {    
    Animal.call(this, nome, "gato");
    this.color = color;
}
//Criando o objeto com herança de Animal
Gato.prototype = Object.create(Animal.prototype);
Gato.prototype.constructor = Gato;

//Instâncias
const animal1 = new Cachorro("Aragorn", "husky siberiano");
const animal2 = new Cachorro("Gandalf", "galgo-afegão");
const animal3 = new Gato("Lucifer", "preto");


animal1.informativo();
animal2.informativo();
animal3.informativo();