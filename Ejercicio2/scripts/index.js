const DINEROSUBS = [6,11,20]
const NATIONALSUBS = [6,11,20]
const AMERICANSUBS = [6,11,20]
const OPERATOR = "Claro"
const DISCOUNT = 0.05

let discountFlag = false
let optionSub
let optionSubTimePrice
let optionOperator

optionSub = parseInt(prompt(" =-= Subscripcion de revistas -=- \n\nEscoja su revista favorita \n1.Dinero\n2.National Geopraphic\n3.American Journal\n"))

switch (optionSub) {
    case 1:
        optionSubTimePrice = DINEROSUBS[optionSub]
        break
    case 2:
        optionSubTimePrice = NATIONALSUBS[optionSub]
        break
    case 3:
        optionSubTimePrice = AMERICANSUBS[optionSub]
        break
}

optionOperator = prompt("Por favor ingrese el nombre de su operador")

if (optionOperator === OPERATOR) {
    discountFlag = true
}

if (discountFlag) {
    optionSubTimePrice = (optionSubTimePrice) - (optionSubTimePrice * DISCOUNT)
}

alert("Tu operador es " + optionOperator + "\nTu revista es: " + optionSub + "\nPrecio total es de: " + optionSubTimePrice)