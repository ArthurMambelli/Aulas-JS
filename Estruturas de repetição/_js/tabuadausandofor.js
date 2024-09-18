let num = parseFloat(prompt("Digite um número: "));
document.write("Tabuada usando for");

for (i = 0; i < 11; i++) {
  document.write("<p>" + num + " * " + i + " = " + num * i + "</p>");
}
