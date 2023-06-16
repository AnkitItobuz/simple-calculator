const number = document.querySelectorAll(".number");
const display = document.getElementById("input-box");
const clearAll = document.getElementById("clear");
const deleteItem = document.getElementById("trim");
const positiveNegativeNumber = document.getElementById("negative-positive-number");
const operator = document.querySelectorAll("#operator");
const equals = document.getElementById("equals");
const percentage = document.getElementById("percentage");
const dot = document.querySelector("#dot");

let result = 0;

let oper ;
let number1 = 0;
let number2 = 0;
let num = 0;
let count = 0;

dot.addEventListener("click", () => {
  if (count < 1) {
    display.innerHTML += dot.innerHTML;
    count++;
  }
});

number.forEach((Element) => {
  Element.addEventListener("click", () => {
    display.innerHTML += Element.innerHTML;
    number1 = Number(display.innerHTML);
  });
});

operator.forEach((Element) => {
  Element.addEventListener("click", () => {
    count = 0;
    num = number1;
    oper = Element.innerHTML.trim();
    display.innerHTML = "";
  });
});

clearAll.addEventListener("click", () => {
  count = 0;
  display.innerHTML = "";
});

positiveNegativeNumber.addEventListener("click", () => {
  display.innerHTML *= -1;
});

deleteItem.addEventListener("click", () => {
  display.innerHTML = display.innerHTML.slice(0, -1);
});

equals.addEventListener("click", () => {
  count = 0;
  console.log(num);
  number2 = Number(display.innerHTML);
  console.log(oper);
  console.log(number2);
  console.log(typeof(oper));

    console.log(typeof("+"));
  // console.log((oper.trim() ===  '+'));
  if (oper === "+") {

    result = num + number2;
    console.log(result);
    display.innerHTML = result;
    number1 = result;
    number2 = "";
  } 
  
  else if (oper === "-") {
    console.log(number2);

    result = num - number2;
    console.log(result);
    display.innerHTML = result;
    number1 = result;
    number2 = "";
  } 
  
  else if (oper === "x") {
    console.log(number2);

    result = num * number2;
    console.log(result);

    display.innerHTML = result;
    number1 = result;
    number2 = "";
  } 
  
  else if (oper === "/") {
    console.log(number2);

    result = num / number2;
    console.log(result);

    display.innerHTML = result;
    number1 = result;
    number2 = "";
  } 

  else {
    console.log("Error");
  }

});

percentage.addEventListener("click", () => {
  number1 = Number(display.innerHTML);
  result = number1 / 100;
  display.innerHTML = result;
});

