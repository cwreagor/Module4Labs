function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operator = document.getElementById("operator").value;
  const resultDiv = document.getElementById("result");

  if (isNaN(num1) || isNaN(num2)) {
    resultDiv.textContent = "Please enter both numbers.";
    return;
  }

  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "x":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        resultDiv.textContent = "Cannot divide by zero.";
        return;
      }
      result = num1 / num2;
      break;
    default:
      resultDiv.textContent = "Invalid operator.";
      return;
  }

  resultDiv.textContent = "Result: " + result;
}

function resetCalculator() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("operator").value = "+";
  document.getElementById("result").textContent = "";
}
