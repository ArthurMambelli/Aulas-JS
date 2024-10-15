function gerarJson(){
    var nome = document.getElementById('nome').value
    var idade = document.getElementById('idade').value    
    var telefone = document.getElementById('telefone').value    
    var endereco = document.getElementById('endereco').value     

    var planetaNasc = document.getElementById('planeta')
    var planeta = planetaNasc.options[planetaNasc.selectedIndex].text

    var racaPref = document.getElementById('raca')
    var raca = racaPref.options[racaPref.selectedIndex].text

    var trabalhoEsc = document.getElementsByName('trabalho')
    for (i=0; i<trabalhoEsc.length; i++) {
        if (trabalhoEsc[i].checked){
            var trabalho = trabalhoEsc[i].value
        }
    }

    var complementoEsc = document.getElementsByName('complemento')
    var complemento = []
    for (i=0; i< complementoEsc.length; i++){
        if (complementoEsc[i].checked){
            complemento.push(complementoEsc[i].value)
        }
    }

    var tamanhoEsc = document.getElementsByName('tamanho')
    for (i=0; i<tamanhoEsc.length; i++){
        if (tamanhoEsc[i].checked){
            tamanho = tamanhoEsc[i].value
        }
    }

    var observacao = document.getElementById('observacao').value

    var dados = {
        nome: nome,
        idade: idade,
        telefone: telefone,
        endereco: endereco,
        planeta: planeta,
        trabalho: trabalho,
        complemento: complemento,
        tamanho: tamanho,
        observacao: observacao
    }

    localStorage.setItem('dados', JSON.stringify(dados))
    window.location.href = 'dados.html'
}

