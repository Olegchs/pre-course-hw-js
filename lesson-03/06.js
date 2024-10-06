const users3 = [
    {
        id: 1,
        user: 'John',
        surName: 'Doe',
        address: '123 Main St'
    },
    {
        id: 2,
        user: 'Tom',
        surName: 'Johnson',
        address: '789 Oak St'
    },
    {
        id: 3,
        user: 'Bob',
        surName: 'Jones',
        address: '135 Pine St'
    },
    {
        id: 4,
        user: 'David',
        surName: 'Davis',
        address: '864 Walnut St'
    },
    {
        id: 5,
        user: 'Mark',
        surName: 'Taylor',
        address: '321 Hickory St'
    },
];


// Добавляем ключ isMarried: true в каждый объект
users3.forEach(user => {
    user.isMarried = true;
});

// Выводим обновленный массив в консоль
console.log(users3);