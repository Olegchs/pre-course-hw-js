const numbers = [[1, 2, 3, 4, 5], [11, 20, 33, 40, 55], [111, 200, 333, 400, 555],];

// Удаляем нечетные числа
numbers.forEach(innerArray => {
    for (let i = innerArray.length - 1; i >= 0; i--) {
        if (innerArray[i] % 2 !== 0) {
            innerArray.splice(i, 1);
        }
    }
});

// Выводим результат в консоль
console.log(numbers);
