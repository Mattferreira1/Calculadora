function calcularSoma() {
  // Pega os valores dos inputs
  var number1 = document.getElementById("number1").value
  var number2 = document.getElementById("number2").value

  // Converte os valores para números
  var valor1 = parseFloat(number1)
  var valor2 = parseFloat(number2)
  var result = valor1 + valor2

  document.querySelector("h4").textContent = "O resultado é " + result
}
