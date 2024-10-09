function validarFormulario(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    /*^(([\\d]{3})([\\.])([\\d]{3})([\\.])([\\d]{3})([\\-])([\\d]{2}))$"*/ 
    const email = document.getElementById("email").value; 

    var nome = document.getElementById("nome").value;   
    if (nome.length < 3){
        alert("Nome muito curto.");
        return false;
    }
    var chuteira = document.getElementById("chuteira").value;   
    if (chuteira > 49 || chuteira < 34){
        alert("Número de chuteira inválido. Tente novamente.");
        return false;
    }

    const endereco = document.getElementById("endereco").value;    
    const cidade = document.getElementById("cidade").value;          

    if (!emailRegex.test(email)) {
        alert ("E-mail inválido. Insira um e-mail válido.");
        return false;
    }

    return true;
}