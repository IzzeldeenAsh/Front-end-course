function calc() {
  let firstNumber = document.getElementById("first-number");
  let secondNumber = document.getElementById("second-number");
  let result = document.getElementById("result");
  let opeSum = document.getElementById("sum");
  let opemin = document.getElementById("min");
  let opeMulti = document.getElementById("mult");
  let opeDiv = document.getElementById("div");

if(opeSum.checked){
    result.innerHTML = parseInt(firstNumber.value) + parseInt(secondNumber.value);

}
else if(opemin.checked){
    result.innerHTML = parseInt(firstNumber.value) - parseInt(secondNumber.value);

}
else if(opeMulti.checked){
    result.innerHTML = parseInt(firstNumber.value) * parseInt(secondNumber.value);

}
else if(opeDiv.checked){
    result.innerHTML = parseInt(firstNumber.value) / parseInt(secondNumber.value);
}

}
