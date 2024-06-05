let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let button = document.getElementById("button");
let result = document.getElementById("result");
let select = document.getElementById("meow");

let add_nums = (x, y) => {
  result.innerHTML = parseInt(x) + parseInt(y);
};
let subtract_nums = (x, y) => {
  result.innerHTML = parseInt(x) - parseInt(y);
};
let multiply_nums = (x, y) => {
  result.innerHTML = parseInt(x) * parseInt(y);
};
let divide_nums = (x, y) => {
  result.innerHTML = parseInt(x) / parseInt(y);
};

button.onclick = () => {
  // this is the logic to check what select is selecting
  if (select.value === "add") {
    add_nums(num1.value, num2.value);
  }
  if (select.value === "subtract") {
    subtract_nums(num1.value, num2.value);
  }
  if (select.value === "multiply") {
    multiply_nums(num1.value, num2.value);
  }
  if (select.value === "divide") {
    divide_nums(num1.value, num2.value);
  }

  num1.value = "";
  num2.value = "";
};
