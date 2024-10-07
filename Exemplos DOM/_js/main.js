let clickBox = document.getElementById("clickBox")
let mousedownBox = document.getElementById("mousedownBox")
let mousemoveBox = document.getElementById("mousemoveBox")
let mouseupBox = document.getElementById("mouseupBox")
let mouseoverBox = document.getElementById("mouseoverBox")
let mouseoutBox = document.getElementById("mouseoutBox")
let output = document.getElementById("output")

clickBox.onclick = function() {
    output.innerHTML = "Você clicou na caixa!"
    this.style.backgroundColor = "lightgreen"
}

mousedownBox.onmousedown = function() {
    output.innerHTML = "Você pressionou o botão do mouse na caixa!"
    this.style.backgroundColor = "lightblue"
}

mousemoveBox.onmousemove = function() {
    output.innerHTML = "Você moveu o mouse na caixa!"
    this.style.backgroundColor = "lightpink"
}

mouseupBox.onmouseup = function() {
    output.innerHTML = "Você soltou o botão do mouse na caixa!"
    this.style.backgroundColor = "lightyellow"
}

mouseoverBox.onmouseover = function() {
    output.innerHTML = "Você passou o mouse sobre a caixa!"
    this.style.backgroundColor = "lightgray"
}

mouseoutBox.onmouseout = function() {
    output.innerHTML = "Você tirou o mouse da caixa!"
    this.style.backgroundColor = ""
}