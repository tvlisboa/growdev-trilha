const nome1 = "Thiago Duarte";
let nome2 = "";

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

alterarNome();
receberAlterarNome("Ronaldo Jose Duarte Lisboa")
receberAlterarNome("Ricardo Lisboa")
receberAlterarNome("Valeria de Fatima")
receberAlterarNome("Olga Ferreira")
receberAlterarNome("Luis henrique")

