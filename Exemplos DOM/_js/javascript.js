function darkMode() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    content.innerHTML = "Tema escuro ATIVADO";
}

function lightMode(){
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    content.innerHTML = "Tema escuro DESATIVADO";
}