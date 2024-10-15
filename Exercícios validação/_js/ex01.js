function validarFormulario(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    const nomeRegex = /^([a-zA-Z]?\s?){0,}$/
    const cpf = document.getElementById("cpf").value;      
    const email = document.getElementById("email").value;     
    const nome = document.getElementById("nome").value;   

    if (!nomeRegex.test(nome)){
        alert("O nome deve conter apenas letras e espaços.")
        return false
    }
    if (nome.length < 3){
        alert("Nome inválido com menos de 3 caracteres.");
        return false;
    }
    if (!cpfRegex.test(cpf)) {
        alert ("Cpf inválido. Utilize . e - em sua escrita.");
        return false;
    }

    if (!emailRegex.test(email)) {
        alert ("E-mail inválido. Insira um e-mail válido.");
        return false;
    }

    return true;
}