function verificarSenha(){
    const nomeRegex = /^([a-zA-Z]?\s?){0,}$/
    var nome = document.getElementById("produtor").value;
    if (!nomeRegex.test(nome)){
        alert("O nome deve conter apenas letras e espaços.")
        return false
    }
    return true;
}

