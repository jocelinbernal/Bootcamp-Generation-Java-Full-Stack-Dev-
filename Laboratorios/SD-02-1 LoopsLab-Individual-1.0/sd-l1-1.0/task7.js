// Refer to Task 7 in your Instructions to complete this task

let buzzWords = [
  "Fizz",
  "Buzz",
  "Woof",
  "Bark",
  "Awoo",
  "Bang",
  "Miau",
  "Quack"
];

// Dice si un número es primo
function esPrimo(n) {
  if (n < 2) return false;
  for (let d = 2; d < n; d++) {
    if (n % d === 0) return false;
  }
  return true;
}

// Junta tantos primos impares como palabras haya: 3, 5, 7, 11, 13, 17
const primos = [];
for (let n = 3; primos.length < buzzWords.length; n += 2) {
  if (esPrimo(n)) primos.push(n);
}

// FizzBuzz extendido
const resultados = [];
for (let i = 1; i <= 255; i++) {
  let salida = "";

  for (let j = 0; j < primos.length; j++) {
    if (i % primos[j] === 0) salida += buzzWords[j];
  }

  resultados.push(salida || i);
}

console.log(resultados);