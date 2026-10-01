// Refer to Task 6 in your Instructions to complete this task

const resultados = [];

for (let i = 1; i <= 105; i++) {
  let salida = "";

  if (i % 3 === 0) salida += "Fizz";
  if (i % 5 === 0) salida += "Buzz";
  if (i % 7 === 0) salida += "Woof";

  resultados.push(salida || i);
}

console.log(resultados);
console.log(resultados[14]); // número 15 → "FizzBuzz"
console.log(resultados.length); // 105