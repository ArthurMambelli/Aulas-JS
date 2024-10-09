function verificarSenha(){
    const nomeRegex = /^([a-zA-Z]?\s?){0,}$/
    var nome = document.getElementById("nome").value;
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

