var idade = prompt("Digite a sua idade: ");

if ((idade > 15 && idade < 18) || idade > 70) {
  document.write("<h1>","O voto é opcional.","</h1>");
} else if (idade < 16) {
  document.write("<h1>","Você não pode votar.", "</h1>");
} else {
  document.write("<h1>","Seu voto é obrigatório.", "</h1>");
}
