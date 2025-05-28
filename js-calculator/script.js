let num1Input = document.querySelector("#num1");
let num2Input = document.querySelector("#num2");

let plusButton = document.querySelector("plus");
let minusButton = document.querySelector("minus");
let multButton = document.querySelector("mult");
let divisionButton = document.querySelector("division");

let resultDiv = document.querySelector("#result");

function addition(xIn,yIn){
    let x = parseFloat(xIn.value);
    let y = parseFloat(yIn.value);
    return x + y;
}

plusButton.addEventListener("click", function (){
    //console.log(num1.value);
    //addition(num1, num2);
    resultDiv.textContent = addition(num1, num2);

})