let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

// Создаем новый объект passportMarried2 с добавленным свойством married
let passportMarried2 = {
    ...passportMarried,
    married: true
};

// Проверяем значения в консоли
console.log(passportMarried);   // Должно вывести оригинальный объект
console.log(passportMarried2);  // Должно вывести новый объект с married: true
