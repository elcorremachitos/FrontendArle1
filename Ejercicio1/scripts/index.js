const PRICELAVAUNDRYSMALL = 3000
const PRICELAVAUNDRYBIG = 4000
const DISCOUNT = 0.03

let discountFlag = false
let total = 0
let answerSmall = 0
let answerBig = 0

answerSmall = parseInt(prompt("¿Cuantas horas usaras la lavadora pequeña?"))
answerBig = parseInt(prompt("¿Cuantas horas usara lavadora grande?"))

if (answerSmall > 10) {
    discountFlag = true
} else if (answerBig > 10) {
    discountFlag = true
}

answerSmall = answerSmall * PRICELAVAUNDRYSMALL
answerBig = answerBig * PRICELAVAUNDRYBIG

if (discountFlag) {
    total = (answerBig + answerSmall) - ((answerBig + answerSmall) * DISCOUNT)
} else {
    total = answerBig + answerSmall
}

alert("El total a pagar es: " + total)