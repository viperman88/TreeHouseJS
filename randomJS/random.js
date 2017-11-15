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

/*
Alternate random number app

let userInput = prompt('Pick a starting number!');
let first = parseInt(userInput);
let userInput2 = prompt('Pick a number, any number!');
let second = parseInt(userInput2);
//finds the difference between start and end num, and adds start num to start at where difference is used to create spread
let randomNum = Math.floor(Math.random() * (second - first + 1)) + first;
let message = '<h1>A random number was generated between ' + first + ' and ' + second + ', that number is ' + randomNum + '</h1>';
document.write(message);
*/
