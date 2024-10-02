function mudarTexto(){
    var p = document.getElementById('meuParagrafo');
    p.textContent = 'Novo parágrafo atualizado 2024'
}

function adicionarParagrafo(){
    var p = document.createElement("p");
    p.textContent = ("Novo parágrafo! :)")
    document.body.appendChild(p);
}

function adicionarTexto(){
    var texto = document.createTextNode("Esse é o novo texto! :) ")
    document.body.appendChild(texto)
}

function mostrarValorName(){
    // Acessa o elemento pelo seu atributo name
    var input = document.getElementsByName("meuInput")[0];
    var resultado = document.getElementById("resultado");

    // Altera o conteúdo do elemento resultado
    resultado.textContent = "Valor do input: " + input.value;
}

function mostrarValorId(){
    // Acessa o elemento pelo seu atributo name
    var input = document.getElementById("meuInput");
    var resultado = document.getElementById('resultadoid');

    // Altera o conteúdo do elemento resultado
    resultado.textContent = "Valor do input: " + input.value;
}

function darkMode() {
    var element = document.body;
    element.className = "dark-mode";
}

function lightMode(){
    var element = document.body;
    element.className = "light-mode";
}
