let plusButton = document.getElementById("plus")
let equalsButton = document.getElementById("input-calc")
let inputText = document.getElementById("input-calc").value
let operation;

const equalsOperation = (operation) => {
    console.log(eval(operation))
}

const plusToOperation = (htmlText) => {
    operation = `${operation} + ${htmlText} +`
    console.log(operation)
}


plusButton.addEventListener("click", plusToOperation)
equalsButton.addEventListener("click", equalsOperation)

console.log('nothing')