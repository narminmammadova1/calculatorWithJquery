$(document).ready(function () {
  const firstNum = $(".firstNum");
  const secondNum = $(".secondNum");
  const resultNum = $("#resultNum");
  const operatorShow = $(".operatorShow");

  let firstNumber = "";
  let secondNumber ="";
  let chooseOperator = null;
  let result = null;
  let acceptSecondNumber = false;

  function beginning(num) {
    if (acceptSecondNumber) {
      secondNumber += num;
      secondNum.text(secondNumber).fadeIn(500)
      return;
    }
    firstNumber += num;
    firstNum.text(firstNumber).fadeIn(500)

  }
  function operation(op) {
    chooseOperator = op;
    acceptSecondNumber = true;
    operatorShow.text(chooseOperator).fadeIn(500)

  }
  function equalOperation() {
    console.log(firstNumber);
    console.log(secondNumber);
console.log(chooseOperator);
    console.log(acceptSecondNumber);

    switch (chooseOperator) {
      case "+":
        result = +firstNumber + +secondNumber;
        break;
      case "-":
        result = +firstNumber - +secondNumber;
        break;
      case "*":
        result = +firstNumber * +secondNumber;
        break;
      case "/":
        result = +firstNumber / +secondNumber;
        break;
      default:
        alert("error");
    }
    resultNum.text(result).fadeIn(500)
  }
  function clearAll() {
    firstNum.fadeOut(100)
    secondNum.fadeOut(100)
    operatorShow.fadeOut(100)
    resultNum.fadeOut(100)

firstNumber=""
secondNumber=""
chooseOperator=null
result=null
acceptSecondNumber=false

  }

  $(document).on("click", ".btn", function () {
    const button = $(this);
    const btnValue = button.text();

    console.log(btnValue);

    console.log(button.hasClass("num"));
    if (button.hasClass("num")) {
      beginning(btnValue)
    } else if (button.hasClass("opr")) {
      console.log("bu operatordur");
      operation(btnValue)
    } else if (button.hasClass("clear")) {
        clearAll()}
    
     else{ button.hasClass("equal")
        equalOperation()}
    
  });
});
