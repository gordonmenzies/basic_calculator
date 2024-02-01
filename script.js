/*

    *** READ ME ***
        - Basic functionality calculator 
        - no decimal function 
    
    ** TO DO 
        - Add Decimal Function 
        - Improve Display 
        - Update Colours 

*/

let displayString = ""
let number = 0;
let numberTwo = 0;
let calculate = false;
let method = "default"
const calculateString = []


function storeFirstNumber(input) {
    console.log(calculateString)
    
    number = parseInt(displayString)
    method = input;

    displayString = ""
    calculateString.length = 0
    document.getElementById("display").innerHTML = displayString

    console.log("number = " + number)

}

function DisplayStringMethod(input) {    
    calculateString.push(input)
    displayString = calculateString.join("")
    document.getElementById("display").innerHTML = displayString
    console.log("displayString = " + displayString)
    }

// Clear Button 

function buttonClickClear() {
    displayString = ""
    number = 0
    numberTwo = 0;
    calculateString.length = 0
    document.getElementById("display").innerHTML = displayString
    console.log("displayString = " + displayString)
}

// Equal Button

function buttonClickEquals() {
    calculate = true
    numberTwo = parseInt(displayString)
    console.log("calculate = " + calculate)
    console.log("number = " + number)
    console.log("numberTwo = " + numberTwo)
  if (calculate === true) {
    switch(method) {
        case "/":
            number = number / numberTwo
            break;
        case "*":
            number = number * numberTwo
            break;
        case "+":
            number = number + numberTwo
            break;
        case "-":
            number = number - numberTwo
    }
    displayString = number
    console.log("final answer = " + displayString)
    numberTwo = 0
    calculate = false
  }
  document.getElementById("display").innerHTML = displayString
  console.log("displayString = " + displayString)
}


function buttonClick0() {
DisplayStringMethod(0)
}

function buttonClick1() {
    DisplayStringMethod(1)
}

function buttonClick2() {
    DisplayStringMethod(2)
}

function buttonClick3() {
    DisplayStringMethod(3)
}

function buttonClick4() {
    DisplayStringMethod(4)
}

function buttonClick5() {
    DisplayStringMethod(5)
}

function buttonClick6() {
    DisplayStringMethod(6)
}

function buttonClick7() {
    DisplayStringMethod(7)
}

function buttonClick8() {
    DisplayStringMethod(8)
}

function buttonClick9() {
    DisplayStringMethod(9)
}

function buttonClickDecimal() {
    DisplayStringMethod(".")
}

function buttonClickTimes() {
    storeFirstNumber("*")

}

function buttonClickDivide() {
    storeFirstNumber("/")
}

function buttonClickPlus() {
    storeFirstNumber("+")
}

function buttonClickMinus() {
    storeFirstNumber("-")
}