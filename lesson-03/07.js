const numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];

// Удаляем нечетные числа
const evenNumbers = numbers.map(innerArray =>
    innerArray.filter(num => num % 2 === 0)
);

// Выводим результат в консоль
console.log(evenNumbers);
