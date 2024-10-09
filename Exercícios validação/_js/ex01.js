function validarFormulario(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    /*^(([\\d]{3})([\\.])([\\d]{3})([\\.])([\\d]{3})([\\-])([\\d]{2}))$"*/ 

    const cpf = document.getElementById("cpf").value;    
    const nome = document.getElementById("nome").value;    
    const endereco = document.getElementById("endereco").value;    
    const cidade = document.getElementById("cidade").value;     
    const email = document.getElementById("email").value;      

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