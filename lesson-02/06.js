let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

// Создаем глубокую копию объекта passportWithAddress
let newPassportWithAddress = JSON.parse(JSON.stringify(passportWithAddress));

// Изменяем город на "Bobryisk"
newPassportWithAddress.address.city = "Bobryisk";

// Проверяем значения в консоли
console.log(passportWithAddress.address.city); // Должно вывести "LA"
console.log(newPassportWithAddress.address.city); // Должно вывести "Bobryisk"
