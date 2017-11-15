//Random number challenge

const randNumBetween = (low, high) => {
    if (isNaN(low) || isNaN(high)) {
        throw new Error('Must be a number!');
    } else {
        let randNum = Math.floor(Math.random() * (high - low + 1)) + low;
        document.write('Random number between ' + low + ' and ' + high);
        document.write(' That random number is ' + randNum);
    }
}
randNumBetween(12, 38);
randNumBetween(12, 'hello');
