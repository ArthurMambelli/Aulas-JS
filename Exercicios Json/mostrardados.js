function mostrarDados(){
    var dados = JSON.parse(localStorage.getItem('dados'))

    var dadosDiv = document.getElementById('dadosDiv')
    dadosDiv.innerHTML = `
    <p><b>Nome:</b> ${dados.nome}</p>
    <p><b>Idade:</b> ${dados.idade}</p>
    <p><b>Telefone:</b> ${dados.telefone}</p>
    <p><b>Endereço:</b> ${dados.endereco}</p>
    <p><b>Planeta:</b> ${dados.planeta}</p>
    <p><b>Trabalho:</b> ${dados.trabalho}</p>
    <p><b>Complemento:</b> ${dados.complemento.join(', ')}</p>
    <p><b>Tamanho:</b> ${dados.tamanho}</p>
    <p><b>Observação:</b> ${dados.observacao}</p>
    `
}