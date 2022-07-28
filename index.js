const SIZE = 9
const OPERATIONS = 4

const numbers = document.getElementById("numbers")

function add(a,b){
    return a + b
}

function subtract(a,b){
    return a - b
}

function multiply(a,b){
    return a * b
}

function divide(a,b){
    return a / b
}

function loadCalc(){
    for (let i = 1; i <= SIZE; i++){
        let newNumb = document.createElement("button")
        newNumb.setAttribute("id", `${i}`)
        newNumb.innerText = i;
        numbers.appendChild(newNumb)
    }
    let newNumb = document.createElement("button")
    newNumb.setAttribute("class","zero")
    newNumb.setAttribute("id", "zero")
    newNumb.innerText = 0;
    numbers.appendChild(newNumb)

    // let equals = document.createElement("button")
    // equals.setAttribute("class","equals")
    // equals.setAttribute("id", "equals")
    // equals.innerText = '=';
    let decimal = document.createElement("button")
    let tempDiv = document.createElement("div")
    decimal.setAttribute("class","decimal")
    decimal.setAttribute("id","decimal")
    decimal.innerText = "."

    numbers.appendChild(tempDiv)
    numbers.appendChild(decimal)
}

function loadOperations{
    for (let i = 0; i < 4; i++){
        let newOperation = document.createElement("button")
        
    }
}

window.onload = () => {
    loadCalc()
}