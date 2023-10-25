"use strict"

window.onload = function (event) {
    let additionForm = document.getElementById("additionForm")
    additionForm.onsubmit = calculateSum

    let addressForm = document.getElementById("addressForm")
    addressForm.onsubmit = addressResult
    
    let ghostBoy = document.getElementById("👻")
    ghostBoy.onmouseover = flipGhost
    

}

document.onkeydown = function (event) {
    console.log(event)

}

function flipGhost (event) {
    event.target.classList.toggle("flipped")
    console.log("ghost should be flipped.")
}

function calculateSum(event) {
    event.preventDefault()

    console.dir(event.target)
    let x = event.target.elements.leftOperand.valueAsNumber
    let y = event.target.elements.rightOperand.valueAsNumber
    console.log(x)
    console.log(y)
    let sum = x + y

    let resultDiv = document.getElementById("additionResult")
    resultDiv.innerHTML = `<h4>${x} + ${y} = <span class= "display-result-red"> ${sum}</span></h4>`
}

function addressResult(event) {
    event.preventDefault()

    console.dir(event.target)
    let city = event.target.elements.city.value
    let state = event.target.elements.state.value
    let country = event.target.elements.country.value
    console.log(city)
    console.log(state)
    console.log(country)
    let submit = (city, state, country)

    let addressResult = document.getElementById("addressResult")
    addressResult.innerHTML = `<h4>Address:<span class="display-result-red"> ${city} , ${state}, ${country}</span></h4>`
}
