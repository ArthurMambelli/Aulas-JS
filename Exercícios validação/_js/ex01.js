function validarFormulario(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cpfRegex = /^((?:[\d][\s]?){5}[\d])$/
    /*^(([\\d]{3})([\\.])([\\d]{3})([\\.])([\\d]{3})([\\-])([\\d]{2}))$"*/ 
    const nomeRegex = /^([a-zA-Z]?\s?){0,}$/
    var nome = document.getElementById("nome").value;
    if (!nomeRegex.test(nome)){
        alert("O nome deve conter apenas letras e espaços.")
        return false
    }
    const cpf = document.getElementById("cpf").value;    
    const endereco = document.getElementById("endereco").value;    
    const cidade = document.getElementById("cidade").value;     
    const email = document.getElementById("email").value;     
    var nome = document.getElementById("nome").value;   
    if (nome.length < 5){
        alert("Nome inválido com menos de 3 caracteres.");
        return false;
    }
    if (!cpfRegex.test(cpf)) {
        alert ("Cpf inválido. Insira apenas números.");
        return false;
    }

    if (!emailRegex.test(email)) {
        alert ("E-mail inválido. Insira um e-mail válido.");
        return false;
    }

    return true;
}