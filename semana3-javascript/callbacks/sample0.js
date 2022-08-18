const suma = (a, b) => a + b;
const resta = (a, b) => a - b;

const calculadora = (operacion, operando1, operando2) =>
  operacion(operando1, operando2);

console.log("5 + 10: ", calculadora(suma, 5, 10));
