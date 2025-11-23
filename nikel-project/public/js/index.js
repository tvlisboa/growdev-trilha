const myModal = new bootstrap.Modal("#register-Modal");

//Usuario criando conta
document.getElementById("create-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email-create-input").value;
    const password = document.getElementById("password-create-input").value;

    if (email.length < 5) {
        alert("Email invalido! Verifique o campo digitado e tente novamente.")
        return;
    }

    if (password.length < 8) {
        alert("Senha deve ter no minimo 8 digitos, tente novamente");
        return;
    }

    saveAccount({
        login: email,
        password: password,
        transactions: []
    });
    myModal.hide();
    alert("Conta criada com sucesso.")
});

//salvar cadastro do usuario
function saveAccount(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}