// Simulador Cajero Automático 
const SALDO_INICIAL = 1000;
let saldo = SALDO_INICIAL;
let opcion;

// Arrow: valida monto > 0 y que sea número
const validarMonto = (monto) => !isNaN(monto) && monto > 0;

// Retorna nuevo saldo o null si no alcanza
function procesarRetiro(saldoActual, monto) {
    if (monto > saldoActual) return null;
    return saldoActual - monto;
}   

// Retorna nuevo saldo 
function procesarDeposito(saldoActual, monto) {
    return saldoActual + monto;
}

// Centraliza salida: console.log + alert
function mostrarResultado(mensaje, esError = false) {
    const prefijo = esError ? "❌ " : "✅ ";
    console.log(prefijo + mensaje);
    alert(mensaje);
}

do {
    opcion = parseInt(prompt(
    "=== CAJERO AUTOMÁTICO ===\n" +
    `Saldo actual: $${saldo}\n\n` +
    "1. Consultar saldo\n" +
    "2. Retirar efectivo\n" +
    "3. Depositar dinero\n" +
    "4. Salir\n\n" +
    "Ingrese opción (1-4):"
));

switch (opcion) {
    case 1:
        mostrarResultado(`Saldo actual: $${saldo}`);
        break;

    case 2: {
    const monto = parseFloat(prompt("Monto a retirar:"));
    if (!validarMonto(monto)) {
        mostrarResultado("Monto inválido. Debe ser número mayor a 0.", true);
} else {
    const nuevoSaldo = procesarRetiro(saldo, monto);
        if (nuevoSaldo === null) {
        mostrarResultado(`Saldo insuficiente. Disponible: $${saldo}`, true);
} else {
    saldo = nuevoSaldo;
        mostrarResultado(`Retiro exitoso. Nuevo saldo: $${saldo}`);
        }
}
break;
}

    case 3: {
    const monto = parseFloat(prompt("Monto a depositar:"));
    if (!validarMonto(monto)) {
        mostrarResultado("Monto inválido. Debe ser número mayor a 0.a", true);
} else {
        saldo = procesarDeposito(saldo, monto);
        mostrarResultado(`Depósito exitoso. Nuevo saldo: $${saldo}`);
}
break;
}

    case 4:
        mostrarResultado("Gracias por usar el cajero automático. ¡Hasta luego!");
    break;

    default:
        mostrarResultado("Opción inválida. Ingrese 1, 2, 3 o 4.", true);
}
} while (opcion !== 4);