const nome1 = "Thiago Duarte";
let nome2 = "";

let pessoaDefault = {
    name: "Thiago Duarte",
    age: "32",
    weight: "75",
    height: "175",
    job: "Full - Stack Developer"
}

/**
 * Criação de uma lista de pessoas
 */

let nomes = ["Thiago", "Victoria", "Marcos", "Luan Henrique", "Pedro Silva"];
let people = [
    {
        name: "Thiago Duarte",
        age: "32",
        weight: "75",
        height: "175",
        job: "Full - Stack Developer"
    },
    {
        name: "Roberto Carlos",
        age: "45",
        weight: "90",
        height: "180",
        job: "Back End Developer"
    },
    {
        name: "Maria Victoria",
        age: "21",
        weight: "60",
        height: "156",
        job: "Trainee"
    },
    {
        name: "Guilherme",
        age: "25",
        weight: "80",
        height: "190",
        job: "Product Owner"
    },
    {
        name: "Livia Andrade",
        age: "18",
        weight: "50",
        height: "150",
        job: "Estagiaria"
    }
];

console.log("Valor inicial");
console.log(nome1);
console.log(nome2);

nome2 = "Thiago D Lisboa";
console.log(nome2);


function alterarNome() {
    nome2 = "Thiago Duarte Lisboa";
    console.log("Valor alterado da variavel");
    console.log(nome2)
}

function receberAlterarNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor recebido e alterado:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("Name user")
    console.log(pessoa.name);

    console.log("Age user")
    console.log(pessoa.age);

    console.log("Weight user")
    console.log(pessoa.weight);

    console.log("Heigh user")
    console.log(pessoa.height);


    console.log("Job user")
    console.log(pessoa.job);
}

function adicionarPessoa(pessoa) {
    people.push(pessoa)
}

adicionarPessoa({
    name: "Bruno Dias",
    age: "30",
    weight: "80",
    height: "180",
    job: "DBA - Analista de Dados Remoto"
})

alterarNome();
receberAlterarNome("Ronaldo Jose Duarte Lisboa")
receberAlterarNome("Ricardo Lisboa")
receberAlterarNome("Valeria de Fatima")
receberAlterarNome("Olga Ferreira")
receberAlterarNome("Luis henrique")

/**
 * Imprimir os dados do objeto pessoa
 */

imprimirPessoa(pessoaDefault)

console.log(nomes.length)
console.log(nomes)
console.log(nomes[1])
console.log(nomes[4])


console.log(people)
console.log(people[1])
console.log(people[2])
console.log(people[5])