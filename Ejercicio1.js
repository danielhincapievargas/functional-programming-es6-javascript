const arr = [1, 2, 3, 4, 5, 6];

  // utilizar el método map de los arreglos para duplicar cada elemento
  // [2, 4, 6, 8, 10, 12]

const duplicar = arr.map(x => x * 2);

console.log(duplicar);


  // utilizar el método filter para filtrar los números pares de arr
  // [2, 4, 6]

const pares = arr.filter(el => el % 2 === 0);

console.log(pares);

  // utilizar el método reduce para sumar todos los elementos
  // 21

const sumatoria = arr.reduce((acc, el) => acc + el);

console.log(sumatoria);