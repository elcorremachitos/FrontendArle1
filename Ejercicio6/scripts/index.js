const OPERATORS = ["Claro","Tigo","Movistar"]
const CLAROPACKAGES = [12000,20000]
const TIGOPACKAGES = [22000,30000]

let userOperator
let userBalance = 0

function openMenuGeneral() {
    while (true) {
        let option = parseInt(prompt("¿Que tipo de operacion quieres hacer?\n1. Recargar\n2. Comprar paquete\n3. Salir"))
        switch (option) {
            case 1:
                rechargePhone()
                break
            case 2:
                buyPackagePhone()
                break
            default:
                return
        }
    }
}

function rechargePhone() {
    let purchaseMount = parseInt(prompt("Ingrese el monto de la recarga (Solo mayores a 10.000$)"))
    if (purchaseMount < 10000) {
        alert("Debes recargar minimo 10.000$")
        return
    }
    userBalance = userBalance + purchaseMount
    showOperationInformation(purchaseMount, "Recargar")
}

function buyPackagePhone(){
    let option
    let purchaseMount
    switch(userOperator){
        case 1:
            option = parseInt(prompt("¿Que paquete te gustaria comprar?\n" +
                "\n1. " + CLAROPACKAGES[0] + " - CV" +
                "\n2. " + CLAROPACKAGES[1] + " - CA"
            ))
            purchaseMount = CLAROPACKAGES[option]
            break
        case 2:
            option = parseInt(prompt("¿Que paquete te gustaria comprar?\n" +
                "\n1. " + TIGOPACKAGES[0] + " - TA" +
                "\n2. " + TIGOPACKAGES[1] + " - TB"
            ))
            purchaseMount = TIGOPACKAGES[option-1]
            break
        default:
            alert("Paquetes para Movistar deshabilitados")
            return
    }
    userBalance = userBalance + purchaseMount
    showOperationInformation(purchaseMount, "Paquete")
}

function askOperator(){
    userOperator = parseInt(prompt("¿Que operador quieres usar?\n" +
        "\n1. Claro" +
        "\n2. Tigo" +
        "\n3. Movistar"
    ))
}

function showOperationInformation(amount, type){
    alert("¡OPERACION EXITOSA!\nOperador: " + userOperator + "\nTu tipo de compra fue: " + type + "\nMonto: " + amount + "\nSaldo actual: " + userBalance)
}

function startApp() {
    askOperator()
    openMenuGeneral()
}

startApp()