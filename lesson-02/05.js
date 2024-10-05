let passport = {
    name: "Petr",
    surname: "Petrov",
};

// Создаем копию объекта passport и изменяем имя
let newPassport = { ...passport, name: "Ivan" };

// Проверяем значения в консоли
console.log(passport.name); // Должно вывести "Petr"
console.log(newPassport.name); // Должно вывести "Ivan"
