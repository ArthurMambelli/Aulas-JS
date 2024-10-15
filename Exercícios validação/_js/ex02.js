function validarFormulario(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nomeRegex = /^([a-zA-Z]?\s?){0,}$/
    const nome = document.getElementById("nome").value;  
    const email = document.getElementById("email").value; 

    if (!nomeRegex.test(nome)){
        alert("O nome deve conter apenas letras e espaços.")
        return false
    }
    if (nome.length < 3){
        alert("Nome muito curto.");
        return false;
    }
    var chuteira = document.getElementById("chuteira").value;   
    if (chuteira > 49 || chuteira < 34){
        alert("Número de chuteira inválido. Tente novamente.");
        return false;
    }         

    if (!emailRegex.test(email)) {
        alert ("E-mail inválido. Insira um e-mail válido.");
        return false;
    }

    return true;
}
