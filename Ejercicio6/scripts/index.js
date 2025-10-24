const OPERATORS = ["Claro","Tigo","Movistar"]
const CLAROPACKAGES = [12000,20000]
const TIGOPACKAGES = [22000,30000]



function askOperation() {
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

}

function buyPackagePhone(){

}

function startApp() {
    askOperation()
}

startApp()