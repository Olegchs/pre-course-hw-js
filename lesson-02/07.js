let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

// Создаем глубокую копию объекта passportMarried
let passportMarried2 = structuredClone(passportMarried);
passportMarried2.married = true; // Добавляем married: true

// Проверяем значения в консоли
console.log(passportMarried);   // Должно вывести оригинальный объект
console.log(passportMarried2);  // Должно вывести новый объект с married: true
