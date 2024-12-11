export function costCalculator(montotransaccion) {
    const intereses = 0.01;
    const transaccion = 3;
    const monto = parseFloat(montotransaccion);
// El parseFloat convierte una cadena en un nuemero decimal (interprete que es un numero)
    const costototal = monto + transaccion+(monto*intereses)
    return parseFloat(costototal.toFixed(2));
// Me redondea dos decimales y me lo convierte a un numero con el parse
}

