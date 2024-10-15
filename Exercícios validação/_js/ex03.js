function validarForm(){
    const produtorRegex = /^([a-zA-Z]?\s?){0,}$/
    const produtor = document.getElementById("produtor").value;
    if (!produtorRegex.test(produtor)){
        alert("O nome do produtor deve conter apenas letras e espaços.")
        return false
    }
    return true;
}

