function calcularSoma() {
  var number1 = document.getElementById("number1").value
  var number2 = document.getElementById("number2").value

  var valor1 = parseFloat(number1)
  var valor2 = parseFloat(number2)
  var result = valor1 + valor2

  document.querySelector("h4").textContent = "O resultado é " + result
}

function calcularSub() {
  var number1 = document.getElementById("number1").value
  var number2 = document.getElementById("number2").value

  var valor1 = parseFloat(number1)
  var valor2 = parseFloat(number2)
  var result = valor1 - valor2

  document.querySelector("h4").textContent = "O resultado é " + result
}

function calcularMulti() {
  var number1 = document.getElementById("number1").value
  var number2 = document.getElementById("number2").value

  var valor1 = parseFloat(number1)
  var valor2 = parseFloat(number2)
  var result = valor1 * valor2

  document.querySelector("h4").textContent = "O resultado é " + result
}

function calcularDivi() {
  var number1 = document.getElementById("number1").value
  var number2 = document.getElementById("number2").value

  var valor1 = parseFloat(number1)
  var valor2 = parseFloat(number2)
  var result = valor1 / valor2

  document.querySelector("h4").textContent = "O resultado é " + result
}

function calcularPoten() {
  var number1 = document.getElementById("number1").value
  var number2 = document.getElementById("number2").value

  var valor1 = parseFloat(number1)
  var valor2 = parseFloat(number2)
  if (valor2 < 0 || Math.floor(valor2) !== valor2) {
    document.querySelector("h4").textContent =
      "O expoente deve ser um número inteiro não negativo."
  }

  if (valor2 === 0) {
    document.querySelector("h4").textContent = "O resultado é 1"
  }

  let resultado = 1
  for (let i = 0; i < valor2; i++) {
    resultado *= valor1
    document.querySelector("h4").textContent = "O resultado é " + resultado
  }
}
function calcularRadi() {
  var number1 = document.getElementById("number1").value
  var number2 = document.getElementById("number2").value

  var numero = parseFloat(number1)
  if (numero < 0) {
    return "Não é possível calcular a raiz quadrada de um número negativo."
  }

  // Calcular a raiz quadrada usando Math.sqrt()
  document.querySelector("h4").textContent = "A raiz de " + numero + " é igual a " + Math.sqrt(numero);
}

