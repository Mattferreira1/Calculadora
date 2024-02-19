function addResult(result) {
  document.querySelector("h4").textContent = result;
}

function getValues() {
  return {
    num1: parseFloat(document.getElementById("number1").value),
    num2: parseFloat(document.getElementById("number2").value),
  };
}

function calcularSoma() {
  const { num1, num2 } = getValues();

  let result = num1 + num2;

  addResult(`O resultado é ${result}`);
  clearResult();
}

function calcularSub() {
  const { num1, num2 } = getValues();
  let result = num1 - num2;

  addResult(`O resultado é ${result}`);
  clearResult();
}

function calcularMulti() {
  const { num1, num2 } = getValues();
  let result = num1 * num2;

  addResult(`O resultado é ${result}`);
  clearResult();
}

function calcularDivi() {
  const { num1, num2 } = getValues();
  if (num1 === 0 && num2 === 0) {
    alert("Impossível dividir 0 por 0");
  }
  let result = num1 / num2;

  addResult(`O resultado é ${result}`);
  clearResult();
}

function calcularPoten() {
  const { num1, num2 } = getValues();
  if (num2 < 0 || Math.floor(num2) !== num2) {
    alert("O expoente deve ser um número inteiro não negativo.");
  }

  if (num2 === 0) {
    addResult(`O resultado é 1`);
    clearResult();
    return;
  }

  let resultado = 1;
  for (let i = 0; i < num2; i++) {
    resultado *= num1;
    addResult(`O resultado é ${resultado}`);
    clearResult();
  }
}
function calcularRadi() {
  const { num1 } = getValues();
  if (num1 < 0) {
    return "Não é possível calcular a raiz quadrada de um número negativo.";
  }

  addResult(`A raiz de ${num1} é igual a ${Math.sqrt(num1)}`);
  clearResult();
}

function clearResult() {
  setTimeout(() => {
    addResult("");
  }, 1000 * 10);
}
