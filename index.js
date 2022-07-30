
const SIZE = 9
const OPERATIONS = 4

const opSymbolsFA = ["fa-solid fa-plus","fa-solid fa-minus",
                    "fa-solid fa-xmark","fa-solid fa-percentage"]
const addSubMultDivi = ["+","-","x","/"]
let currVal = ""

const numbers = document.getElementById("numbers")
const operations = document.getElementById("operations")
const dot = document.getElementById("decimal")
const column3 = document.getElementById("column-3")
const column4 = document.getElementById("column-4")
let calcHeaderVal = document.getElementById("results-header")



function loadCalc(){
    for (let i = 1; i <= SIZE; i++){
        let newNumb = document.createElement("button")
        let temp = document.createElement("i")

        newNumb.setAttribute("id", `${i}`)
        newNumb.setAttribute("class", `${i}`)
        // newNumb.innerText = i;



        newNumb.addEventListener("click", () => {
            currVal += i.toString()
            // console.log(newNumb.innerText)
            calcHeaderVal.innerText = currVal
            console.log(currVal)

        })
        temp.className = `fa fa-${i}`
        numbers.appendChild(newNumb)
        newNumb.appendChild(temp)
    }
    let newNumb = document.createElement("button")
    let temp = document.createElement("i")
    temp.className = `fa fa-0`

    newNumb.setAttribute("class","zero")
    newNumb.setAttribute("id", "zero")


    newNumb.addEventListener("click", () => {
        currVal += "0"
        calcHeaderVal.innerText = currVal
        console.log(currVal)

    })
    numbers.appendChild(newNumb)
    newNumb.appendChild(temp)


    let decimal = document.createElement("button")
    let tempDiv = document.createElement("div")
    let temp1 = document.createElement("i")
    temp1.className = `fa fa-period`

    decimal.setAttribute("class","decimal")
    decimal.setAttribute("id","decimal")
    decimal.innerText = "."

    decimal.addEventListener("click", () => {
        currVal += "."
        calcHeaderVal.innerText = currVal
        console.log(currVal)

    })
    
    numbers.appendChild(tempDiv)
    numbers.appendChild(decimal)
    decimal.appendChild(temp1)


    loadOperations()
    loadColumn3()
    loadColumn4()
}

function loadOperations (){
    for (let i = 0; i < 4; i++){
        let newOperation = document.createElement("button")
        let temp = document.createElement("i")

        newOperation.setAttribute("class", `${addSubMultDivi[i]}`)
        newOperation.setAttribute("id", `${addSubMultDivi[i]}`)
        newOperation.addEventListener("click", () => { 
        currVal += addSubMultDivi[i]
        calcHeaderVal.innerText = currVal
        console.log(currVal)
        return
    })

        temp.className = `${opSymbolsFA[i]}`
        calcHeaderVal.innerText = currVal
        operations.appendChild(newOperation)
        newOperation.appendChild(temp)
    }
}

function loadColumn3(){
    let squareRoot = document.createElement("button")
    let power = document.createElement("button")
    let temp1 = document.createElement("i")
    let temp2 = document.createElement("i")
    
    temp1.className = "fa fa-square-root-variable"
    temp2.className = "fa fa-superscript"

    squareRoot.onclick = squareRootFunct
    power.onclick = raiseToPower

    column3.appendChild(squareRoot)
    squareRoot.appendChild(temp1)

    column3.appendChild(power)
    power.appendChild(temp2)


}


function loadColumn4(){

    let reset = document.createElement("button")
    let equalSymbol = document.createElement("button")
    let backSpace = document.createElement("button")
    let temp1 = document.createElement("i")
    let temp2 = document.createElement("i")


    reset.setAttribute("id", "reset")
    reset.setAttribute("id", "reset")
    reset.innerText = "C"
    reset.onclick = resetFunct

    equalSymbol.setAttribute("id", "equals")
    equalSymbol.setAttribute("class","equals")
    equalSymbol.onclick = calculateResults

    backSpace.setAttribute("id","backSpace")
    backSpace.setAttribute("class","backSpace")
    backSpace.onclick = backSpaceFunct

    temp1.className = "fa-solid fa-equals"
    temp2.className = "fa-solid fa-arrow-left"

    column4.appendChild(reset)
    column4.appendChild(equalSymbol)
    column4.appendChild(backSpace)

    equalSymbol.append(temp1)
    backSpace.append(temp2)
}



function operationsFunct(i,a,b){

    switch(i){
        case '+':
            (a,b)=> a+b
        case '-':
            (a,b) => a-b
        case 'x':
            (a,b) => a*b 
        case '/':
            (a,b) => a/b
    }
}

function calculateResults(){
    if (currVal.includes('+')) {
        let values = currVal.split("+")
        let newVal = Number(values[0]) + Number(values[1])
        currVal = newVal
        calcHeaderVal.innerText = newVal
        console.log(currVal)
        
        return
    }
    if (currVal.includes('-')) {
        let values = currVal.split("-")
        let newVal = Number(values[0]) - Number(values[1])
        currVal = newVal
        calcHeaderVal.innerText = newVal
        console.log(currVal)

        return
    }
    if (currVal.includes('x')) {
        let values = currVal.split("x")
        
        let newVal = Number(values[0]) * Number(values[1])
        currVal = newVal
        calcHeaderVal.innerText = newVal
        console.log(currVal)
        
        return
    }
    if (currVal.includes('/')) {
        let values = currVal.split("/")
        let newVal = Number(values[0]) / Number(values[1])
        currVal = newVal
        calcHeaderVal.innerText = newVal
        console.log(currVal)
        return
    }
}

function resetFunct(){
    currVal = ""
    calcHeaderVal.innerText = currVal
    
}

function backSpaceFunct(){
    currVal = currVal.slice(0,-1)
    console.log(currVal);
    calcHeaderVal.innerText = currVal
}

function squareRootFunct(){
    currVal = Math.sqrt(Number(currVal))
    calcHeaderVal.innerText = currVal

}


function raiseToPower(){
    currVal = Math.pow(Number(currVal),2)
    calcHeaderVal.innerText = currVal

}



window.onload = () => {
    loadCalc()
    // calcHeaderVal.innerText
}