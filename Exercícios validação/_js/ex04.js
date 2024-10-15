function verificarSenha(){
    const nomeRegex = /^([a-zA-Z]?\s?){0,}$/
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = document.getElementById("email").value;
    const login = document.getElementById("login").value;
    const nome = document.getElementById("nome").value;
    if(login.search( /\s/g ) != -1 ){
        alert("Login inválido. Não digite espaços.")
        return false
    }
    if (!emailRegex.test(email)) {
        alert ("E-mail inválido. Insira um e-mail válido.");
        return false;
    }
    if (!nomeRegex.test(nome)){
        alert("O nome deve conter apenas letras e espaços.")
        return false
    }
    var s1 = document.getElementById("senha").value;
    var s2 = document.getElementById("confirmarsenha").value;
    if (s1 != s2){
        alert("As senhas não conferem!")
        return false;
    }
    return true;
}

