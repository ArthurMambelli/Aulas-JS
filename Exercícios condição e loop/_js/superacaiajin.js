var P = 10
var M = 15
var G = 20

function confirmarESC(){
    var tamanho = document.getElementsByName('tamanho')
    for (var i = 0; i < tamanho.length; i++) {
        if (tamanho[i].checked) {
            var valorSelecionado = tamanho[i].value;
            break;
        } 

    }
    document.getElementById('pag').style.display='none'
    switch (valorSelecionado) {
        case "P":
            resultado = "O tamanho selecionado foi pequeno. O preço é de R$10,00."
            preco = P
            document.getElementById('confirmpagm').style.display='none'
            break;
        case "M":
            resultado = "O tamanho selecionado foi médio. O preço é de R$15,00."
            preco = M
            document.getElementById('confirmpagm').style.display='none'
            break;
        case "G":
            resultado = "O tamanho selecionado foi grande. O preço é de R$20,00."
            preco = G
            document.getElementById('confirmpagm').style.display='none'
            break;
        default:
            break;
    }
    document.getElementById('par').innerHTML = ("<p>" + resultado + "</p>")
}

function formpag(){
    document.getElementById('pag').style.display='block'
    var pagamento = document.getElementsByName('pagamento')
    for (var i = 0; i < pagamento.length; i++) {
        if (pagamento[i].checked) {
            var pagamentoSelecionado = pagamento[i].value;
            break;
        } 

    }
    switch (pagamentoSelecionado) {
        case "dinheiro":
            pagar = "A forma de pagamento escolhida foi dinheiro. O valor total é de: "
            preco = preco
            document.getElementById('pag').innerHTML = ("<p>" + pagar + preco + "</p>")
            document.getElementById('form-troco').style.display='block'
            break;
        case "cartao":
            pagar = "A forma de pagamento escolhida foi cartão. Nessa forma de pagamento, o preço sofrerá um acréscimo de 5% do valor total. Portanto, o preço é de: "
            precoCar = preco + (preco * 0.05)
            document.getElementById('pag').innerHTML = ("<p>" + pagar + precoCar + "</p>")
            document.getElementById('confirmpagm').style.display='block'
            document.getElementById('form-troco').style.display='none'
            
            break;
        default:
            break;
    }
}

function calculoFin() {
    totalPago = document.getElementById('totalPago').value
    if (totalPago > preco) {
        troco = totalPago - preco
        finalCompra1 = "O seu troco é de: R$"
        document.getElementById('final').innerHTML = ("<p>" + finalCompra1 + troco + "<br>" + "Sua compra foi realizada com sucesso. Volte sempre!" + "</p>")
    } else if (totalPago == preco) {
        troco = totalPago - preco
        finalCompra2 = "Você não precisará de troco. Obrigado pela compra e volte sempre!"
        document.getElementById('final').innerHTML = ("<p>" + finalCompra2 + "</p>")
    } else if (totalPago < preco) {
        finalCompra3 = "O valor inserido é inferior ao preço do produto. Tente novamente."
        document.getElementById('final').innerHTML = ("<p>" + finalCompra3 + "</p>")
    } else {
        document.getElementById('final').innerHTML = ("<p>Valor inválido.</p>")
    }
}

function confirmpagm() {
    document.getElementById('confirmado').innerHTML = ("<p> Pagamento realizado com sucesso, agradecemos a preferência! </p>")
}
