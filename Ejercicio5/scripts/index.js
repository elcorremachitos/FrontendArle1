const OBJECTIVE1 = 100000
const OBJECTIVE2 = 500000
const POINTSPLUS1 = 100
const POINTSPLUS2 = 250
const POINTSPLUS3 = 400
const MAXPOINTS = 500
const DISCOUNT = 0.2

let idCardUser
let purchaseMount
let userPoints = 100

function askIdCard(){
    return prompt("Ingrese los digitos de su cedula")
}

function askPurchaseMount(){
    return parseInt(prompt("Ingrese el monto de su compra\nCedula: " + idCardUser + "\nPuntos actuales: " + userPoints))
}

function calculatePoints(purchaseMount){
    if (purchaseMount < OBJECTIVE1){
        userPoints = userPoints + POINTSPLUS1;
    } else if (purchaseMount >= OBJECTIVE1 && purchaseMount < OBJECTIVE2){
        userPoints = userPoints + POINTSPLUS2;
    } else if (purchaseMount >= OBJECTIVE2){
        userPoints = userPoints + POINTSPLUS3;
    }
}

function startApp(){
    idCardUser = askIdCard()

    while(userPoints < MAXPOINTS){
        purchaseMount = askPurchaseMount()
        calculatePoints(purchaseMount)
        alert("Sigue acumulando puntos, tienes " + userPoints + " y necesitas " + MAXPOINTS)
    }

    purchaseMount = askPurchaseMount()
    alert("¡Felicidades! Tienes un descuento pendiuente de " + (purchaseMount*DISCOUNT) + " para tu proxima compra (20%)")

}

startApp();