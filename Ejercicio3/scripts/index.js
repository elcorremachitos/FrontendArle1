const COLORS = ["Verde", "Amarillo", "Rojo", "Error"];
const COLORSMESSAGE = ["Puede Avanzar","Precaucion","Detengase","Fallo en el dispositivo"]

let colorChoosen
let state

function startTraffic(){
    state = parseInt(prompt("Por favor indique si el semaforo esta apagado\n1.Encendido\n2.Apagado"))

    if (state === 2) {
        alert("Semaforo apagado")
        return;
    }

    colorChoosen = (parseInt(prompt("Ingrese el color de su semaforo\n" +
        "1. " + COLORS[0] + "\n" +
        "2. " + COLORS[1] + "\n" +
        "3. " + COLORS[2] + "\n" +
        "4. " + COLORS[3] + "\n")
    )) - 1

    alert(COLORSMESSAGE[colorChoosen])

}

startTraffic();