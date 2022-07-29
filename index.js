const SIZE = 9
const OPERATIONS = 4
let currVal = ""

const numbers = document.getElementById("numbers")
const operations = document.getElementById("operations")
const equals = document.getElementById("equals")
let calcHeaderVal = document.getElementById("results-header")

equals.onclick = calculateResults

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
        newNumb.addEventListener("click", () => {
            currVal += newNumb.innerText
            // console.log(newNumb.innerText)
            calcHeaderVal.innerText = currVal
            console.log(currVal)
            return
        })
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

    loadOperations()
}

function loadOperations (){
    for (let i = 0; i < 4; i++){
        let newOperation = document.createElement("button")
        let opSymbol = typeOfOp(i)
        newOperation.setAttribute("class", `${opSymbol}`)
        newOperation.setAttribute("id", `${opSymbol}`)
        newOperation.addEventListener("click", () => { 
        currVal += opSymbol
        // console.log(newNumb.innerText)
        calcHeaderVal.innerText = currVal
        console.log(currVal)
        return
    })
        calcHeaderVal.innerText = currVal
        newOperation.innerText = opSymbol
        operations.appendChild(newOperation)
    }
}

function typeOfOp(op){

    switch(op){
        case 0:
            return '+'
        case 1:
            return '-'
        case 2:
            return '*'
        case 3:
            return '/'
    }
}


function operationsFunct(i,a,b){

    switch(i){
        case '+':
            return add(a,b)
        case '-':
            return subtract(a,b)
        case '*':
            return multiply(a,b)
        case '/':
            return divide(a,b)
    }
}

function calculateResults(){
    if (currVal.includes('+')) {
        let values = currVal.split("+")
        console.log(values)
        console.log(add(Number(values[0]), Number(values[1])))
        return
    }
    if (currVal.includes('-')) {
        let values = currVal.split("-")
        console.log(values)
        console.log(subtract(Number(values[0]), Number(values[1])))
        return
    }
    if (currVal.includes('*')) {
        let values = currVal.split("*")
        console.log(values)
        console.log(multiply(Number(values[0]), Number(values[1])))
        return
    }
    if (currVal.includes('/')) {
        let values = currVal.split("/")
        console.log(values)
        console.log(divide(Number(values[0]), Number(values[1])))
        return
    }
}



window.onload = () => {
    loadCalc()
}