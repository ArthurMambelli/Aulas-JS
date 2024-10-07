function verificarSenha(){
    var s1 = document.getElementById("senha").value;
    var s2 = document.getElementById("confirmarsenha").value;
    if (s1 != s2){
        alert("As senhas não conferem!")
        return false;
    }
    return true;
}