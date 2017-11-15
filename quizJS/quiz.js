//Quiz starts at no answers correct
let correct = 0;

//Ask questions and check conditionals
let questions1 = prompt('What is my first name?');
if (questions1.toUpperCase() === 'ROBERT') {
    correct++;
}

let questions2 = prompt('What is my last name?');
if (questions2.toUpperCase() === 'AMATO') {
    correct++;
}

let questions3 = prompt('What is my age?');
if (parseInt(questions3) === 35) {
    correct++;
}

let questions4 = prompt('What is my hometown?');
if (questions4.toUpperCase() === 'AUSTIN') {
    correct++;
}

let questions5 = prompt('What is my wifes name?');
if (questions5.toUpperCase() === 'MAGGIE') {
    correct++;
}

document.write('<h2>You got ' + correct + ' answers correct!</h2>');

if (correct === 5) {
    document.write('<p>You got all correct and won a gold crown!</p>');
} else if (correct > 2) {
    document.write('<p>You won a silver crown!</p>');
} else if (correct > 0) {
    document.write('<p>You won a bronze crown!</p>');
} else {
    document.write('<p>You won nothing!</p>');
}
