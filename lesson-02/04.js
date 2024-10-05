const giveMeRightCondition = (value1, value2, maximum) => {
    if (value1 === value2 && value1 <= maximum) {
        console.log('Success!');
    } else {
        console.log('Something wrong!');
    }
}

giveMeRightCondition(5, 100, 200)
