"use strict"

let additionForm = document.getElementById("additionForm")
additionForm.onsubmit = calculateSum

function calculateSum (event) {
    event.preventDefault()
    let x = event.target.elements.leftOperand.valueAsNumber
    let y = event.target.elements.rightOperand.valueAsNumber
    console.log(x)
    console.log(y)
    let sum = x + y

    let resultDiv = document.getElementById("additionResult")
     resultDiv.innerHTML = `<h4>${x} + ${y} = <span class= "display-result-red"> ${sum}</span></h4>`
}

let addressForm = document.getElementById("addressForm")
addressForm.onsubmit = addressResult

function addressResult (event){
    event.preventDefault()
    let city = event.target.elements.leftOperand.value
    let state = event.target.elements.middleOperand.value
    let country = event.target.elements.rightOperand.value
    console.log(city)
    console.log(state)
    console.log(country)
    let submit = (city , state  , country)

    let addressResult = document.getElementById(addressResult)
    addressResult.innerHTML = `<h4>{city}, {state}, {country}</span></h3>`

}