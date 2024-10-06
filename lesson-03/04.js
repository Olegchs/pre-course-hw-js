const users = [
    {
        id: 1,
        user: 'John',
        surName: 'Doe',
        address: '123 Main St'
    },
    {
        id: 2,
        user: 'Jane',
        surName: 'Smith',
        address: '456 Elm St'
    },
    {
        id: 3,
        user: 'Tom',
        surName: 'Johnson',
        address: '789 Oak St'
    },
    {
        id: 4,
        user: 'Alice',
        surName: 'Brown',
        address: '246 Maple St'
    },
    {
        id: 5,
        user: 'Bob',
        surName: 'Jones',
        address: '135 Pine St'
    },
    {
        id: 6,
        user: 'Sarah',
        surName: 'Lee',
        address: '579 Cedar St'
    },
    {
        id: 7,
        user: 'David',
        surName: 'Davis',
        address: '864 Walnut St'
    },
    {
        id: 8,
        user: 'Susan',
        surName: 'Miller',
        address: '975 Birch St'
    },
    {
        id: 9,
        user: 'Mark',
        surName: 'Taylor',
        address: '321 Hickory St'
    },
    {
        id: 10,
        user: 'Karen',
        surName: 'White',
        address: '753 Cherry St'
    }
];

const evenIdUsers = users.filter(user => user.id % 2 === 0);

// Выводим результат в консоль
console.log(evenIdUsers);

