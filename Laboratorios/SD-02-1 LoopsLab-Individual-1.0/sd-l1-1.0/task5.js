// Refer to Task 5 in your Instructions to complete this task

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("¿Cuántas líneas quieres generar? ", (respuesta) => {
  const limite = Number(respuesta);

  for (let i = 1; i <= limite; i++) {
    let salida = "";

    if (i % 3 === 0) salida += "Fizz";
    if (i % 5 === 0) salida += "Buzz";
    if (i % 7 === 0) salida += "Woof";

    console.log(salida || i);
  }

  rl.close();
});