function validarFormulario(){
    const nomeRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const nome = document.getElementById("nome").value;    
    const email = document.getElementById("email").value;    

    if (!nomeRegex.test(nome)) {
        alert ("Nome inválido. Use apenas letras e espaços.");
        return false;
    }

    if (!emailRegex.test(email)) {
        alert ("E-mail inválido. Insira um e-mail válido.");
        return false;
    }

    return true;
}