const arr = [
    [0,1,2,3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26,27,28,29]
  ]
  
  // Type your code below this line!
  
  // 1. Agregar un número a una fila existente (a la primera)
arr[0].push(10);

// 2. Agregar una fila nueva completa
arr.push([30, 31, 32, 33, 34]);

// 3. Quitar un número de una sola fila (el último de la segunda)
arr[1].pop();

// 4. Invertir solo una fila (la tercera), sin tocar las demás
arr[2].reverse();

console.log(arr);
  
  // Type your code above this line!