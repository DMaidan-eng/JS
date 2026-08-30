//Variables
const saldoInicial = 1000;
let saldo = saldoInicial;
let opcion;

//Bucle principal del cajero
do {
    opcion = parseInt(prompt("== Cajero Automático==\n" +
        "saldo actual: $" + saldo + "\n" +
        "1. Consultar saldo\n" +
        "2. Retirar dinero\n" +
        "3. depositar dinero\n" +
        "4. Salir\n" +
        "Ingrese el número de la opción deseada:"));

//Switch para manejar las opciones del cajero
switch (opcion) {
    case 1:
        console.log("Su saldo es: $" + saldo);
        alert("Su saldo actual es: $" + saldo);
        break;
    case 2:
        let retiro = parseFloat(prompt("Ingrese la cantidad a retirar:"));

        if (isNaN(retiro) || retiro <= 0) {
            alert("Monto inválido. Por favor, ingrese un número mayor a 0.");
        }
        else if (retiro > saldo) {
            console.log("Saldo insuficiente para retirar $" + retiro);
            alert("Saldo insuficiente. Su saldo actual es: $" + saldo);
        }
        else {
            saldo -= retiro;
            console.log("Retiro exitoso. Su nuevo saldo es: $" + saldo);
            alert("Retiro exitoso. Su nuevo saldo es: $" + saldo);
        }
        break;
    case 3: 
        let deposito = parseFloat(prompt("ingrese la cantidad a depositar:"));

        if (isNaN(deposito) || deposito <= 0) {
            console.log("Monto inválido. Por favor, ingrese un número mayor a 0.");
            alert("Monto inválido. Por favor, ingrese un número mayor a 0.");
        } 
        else {
            saldo += deposito;
            console.log("Depósito exitoso. Su nuevo saldo es: $" + saldo);
            alert("Depósito exitoso. Su nuevo saldo es: $" + saldo);
        }
        break;
    case 4:
        console.log("Gracias por usar el cajero automático. ¡Hasta luego!");
        alert("Gracias por usar el cajero automático. ¡Hasta luego!");
        break;
    default:
        console.log("Opción inválida. Por favor, ingrese un número del 1 al 4.");
        alert("Opción inválida. Por favor, ingrese un número del 1 al 4.");
    }
}while (opcion !== 4);

