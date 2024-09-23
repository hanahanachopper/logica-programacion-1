function solicitarNumero(mensaje) {
    let numero;
    do {
        numero = prompt(mensaje);
    } while (isNaN(numero) || numero === null || numero.trim() === "");
    return parseFloat(numero);
}
let num1 = parseFloat(prompt("Introduce el primer número:"));
let num2 = parseFloat(prompt("Introduce el segundo número:"));
let num3 = parseFloat(prompt("Introduce el tercer número:"));

if (num1 === num2 && num2 === num3) {
    console.log("Los tres números ingresados (" + num1 + ", " + num2 + " y " + num3 + ") son iguales.");
} else {
    if (num1 === num2) {
        console.log("El primer número ingresado (" + num1 + ") es igual al segundo (" + num2 + ").");
    } 
    if (num2 === num3) {
        console.log("El segundo número ingresado (" + num2 + ") es igual al tercero (" + num3 + ").");
    }
    
    let mayor = Math.max(num1, num2, num3);
    let menor = Math.min(num1, num2, num3);
    
    // Encontrar el número del medio
    let medio = (num1 + num2 + num3) - mayor - menor;

    // Imprimir los números de mayor a menor
    console.log("Números de mayor a menor:", mayor, medio, menor);

    // Imprimir los números de menor a mayor
    console.log("Números de menor a mayor:", menor, medio, mayor);
}