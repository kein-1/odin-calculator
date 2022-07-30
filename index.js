
const SIZE = 9
const OPERATIONS = 4

const opSymbolsFA = ["fa-plus","fa-minus","fa-multiply","fa-percent"]
// const numbSymbolsFA = ["fa-1","fa-2","fa-3","fa-4", ]
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
        // console.log(newNumb.innerText)
        calcHeaderVal.innerText = currVal
        console.log(currVal)

    })
    numbers.appendChild(newNumb)
    newNumb.appendChild(temp)


    // let equals = document.createElement("button")
    // equals.setAttribute("class","equals")
    // equals.setAttribute("id", "equals")
    // equals.innerText = '=';
    let decimal = document.createElement("button")
    let tempDiv = document.createElement("div")
    decimal.setAttribute("class","decimal")
    decimal.setAttribute("id","decimal")
    decimal.innerText = "."

    decimal.addEventListener("click", () => {
        currVal += decimal.innerText
        // console.log(newNumb.innerText)
        calcHeaderVal.innerText = currVal
        console.log(currVal)

    })
    
    numbers.appendChild(tempDiv)
    numbers.appendChild(decimal)

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
        // console.log(newNumb.innerText)
        calcHeaderVal.innerText = currVal
        console.log(currVal)
        return
    })

        temp.className = `fa ${opSymbolsFA[i]}`
        calcHeaderVal.innerText = currVal
        // newOperation.innerText = opSymbol
        operations.appendChild(newOperation)
        newOperation.appendChild(temp)
    }
}

function loadColumn3(){
    let equalSymbol = document.createElement("button")
    let backSpace = document.createElement("button")
    
    equalSymbol.setAttribute("id", "equals")
    equalSymbol.setAttribute("class","equals")
    equalSymbol.innerText = "="
    equalSymbol.onclick = calculateResults

    backSpace.setAttribute("id","backSpace")
    backSpace.setAttribute("class","backSpace")
    let dummy = String.fromCodePoint(8592);
    backSpace.innerText = dummy
    backSpace.onclick = backSpaceFunct

    column3.appendChild(equalSymbol)
    column3.appendChild(backSpace)


}


function loadColumn4(){

    let reset = document.createElement("button")
    
    reset.setAttribute("id", "reset")
    reset.setAttribute("id", "reset")
    reset.innerText = "C"
    reset.onclick = resetFunct
    column4.appendChild(reset)


}





// function typeOfOp(op){

//     switch(op){
//         case 0:
//             return '+'
//         case 1:
//             return '-'
//         case 2:
//             return '*'
//         case 3:
//             return '/'
//     }
// }


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
        // console.log(values)
        // console.log(subtract(Number(values[0]), Number(values[1])))
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



window.onload = () => {
    loadCalc()
    // calcHeaderVal.innerText
}