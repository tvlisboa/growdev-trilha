const myModal = new bootstrap.Modal("#register-Modal");
const session = localStorage.getItem("session");
let logged = sessionStorage.getItem("logged");

checkLogged();

//Logar no Sistema
document.getElementById("login-forms").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;
    const checkSession = document.getElementById("session-input").checked;
    const account = getAccount(email);

    if (!account) {
        alert("Verifique o usuário ou senha informados.");
        return;
    }

    if (account) {
        if (account.password !== password) {
            alert("Verifique o usuário ou senha informados.")
            return;
        }

        saveSession(email, checkSession);
        window.location.href = "home.html";
    }
})

//Criação de conta
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
        email: email,
        password: password,
        transactions: []
    });

    myModal.hide();
    alert("Conta criada com sucesso.")
});

function checkLogged() {
    if (session) {
        sessionStorage.setItem("logged", session);
        logged = session;
    }
    if (logged) {
        saveSession(logged, true);
        window.location.href = "home.html";
    }
}

//salvar cadastro do usuario
function saveAccount(data) {
    localStorage.setItem(data.email, JSON.stringify(data));
}

function saveSession(data, saveSession) {
    if (saveSession) {
        localStorage.setItem("session", data);
    }
    sessionStorage.setItem("logged", data);
}

//transformando uma string em um objeto
function getAccount(key) {
    const account = localStorage.getItem(key);

    if (account) {
        return JSON.parse(account);
    }
    return "";
}
