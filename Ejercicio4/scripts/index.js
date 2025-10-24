const CORRECTLETTERS = ["O","T","S","N"]
const CORRECTNUMBERS = ["1","2","3","4","5","6","7","8","9","10"]
const POINTS = ["Oriental","Occidental","Sur","Norte"]



let userCode
let userCodeSplit
let userPointPosition

function startApp(){
    userCode = (prompt("Ingresa el codigo")).toUpperCase();
    userCodeSplit = userCode.split("")

    console.log(userCodeSplit.length)

    if (!(userCodeSplit.length === 6)){
        alert("Codigo invalido: Maximo 6 digitos")
        return;
    }

    for (let i = 0; i < CORRECTLETTERS.length; i++) {
        if(userCodeSplit[0] === CORRECTLETTERS[i]){
            userPointPosition = POINTS[i]
            i = CORRECTLETTERS.length
        } else{
            alert("Codigo invalido: Primera letra invalida")
            return
        }
    }

    for (let i = 1; i < userCodeSplit.length; i++){
        if (!(CORRECTNUMBERS.includes(userCodeSplit[i]))){
            alert("Codigo invalido: Digito no numerico")
            return
        }
    }

    alert("Bienvenido, dirijase a la zona " + userPointPosition)
}

startApp()