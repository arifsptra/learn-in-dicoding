const calculator = {
  displayNumber: "0",
  operators: null,
  firstNumber: null,
  waitingForSecondNumber: false,
};

function updateDisplay() {
  document.querySelector("#displayNumber").innerHTML = calculator.displayNumber;
}

function clearCalculator() {
  calculator.displayNumber = "0";
  calculator.operators = null;
  calculator.firstNumber = null;
  calculator.waitingForSecondNumber = false;
}

function inputDigit(digit) {
  if (calculator.displayNumber === "0") {
    calculator.displayNumber = digit;
  } else {
    calculator.displayNumber += digit;
  }
}

function inverseNumber() {
  if (calculator.displayNumber === "0") {
    return;
  }
  calculator.displayNumber *= -1;
}

function handleOperator(operator) {
  if (!calculator.waitingForSecondNumber) {
    calculator.operators = operator;
    calculator.waitingForSecondNumber = true;
    calculator.firstNumber = calculator.displayNumber;

    // Reset display value
    calculator.displayNumber = "0";
  } else {
    alert("Operator Already Applied!");
  }
}

function performCalculation() {
  if (calculator.firstNumber == null || calculator.operators == null) {
    alert("Anda belum menetapkan operator");
    return;
  }

  let result = 0;
  if (calculator.operators === "+") {
    result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
  } else {
    result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
  }

  calculator.displayNumber = result;
}

const buttons = document.querySelectorAll(".button");

for (const button of buttons) {
  button.addEventListener("click", function (event) {
    // Get clicked object
    const target = event.target;

    if (target.classList.contains("clear")) {
      clearCalculator();
      updateDisplay();
      return;
    }

    if (target.classList.contains("negative")) {
      inverseNumber();
      updateDisplay();
      return;
    }

    if (target.classList.contains("equals")) {
      performCalculation();
      updateDisplay();
      return;
    }

    if (target.classList.contains("operator")) {
      handleOperator(target.innerHTML);
      return;
    }

    inputDigit(target.innerHTML);
    updateDisplay();
  });
}
