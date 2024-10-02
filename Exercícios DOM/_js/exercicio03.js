function mostrarDetalhes(){
    document.getElementById("paragrafo1").innerHTML = "Largura interna da janela " + window.innerWidth + "<br><br>Altura interna da janela: " + window.innerHeight;
    document.getElementById("paragrafo2").innerHTML = "Posição de rolagem horizontal: " + window.scrollX + "<br><br>Posição de rolagem vertical: " + window.scrollY; 
}