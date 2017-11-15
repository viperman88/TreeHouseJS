//Create question and answer const
const questionsAnswers = [
    ['what is my name?', 'Robert'],
    ['who is my wife?', 'Maggie'],
    ['who is our dog?', 'Franklin']
];
let correctAnswers = 0;
let question;
let answer;
let response;
let html;
let right = [];
let wrong = [];

const print = (message) => document.write(message);
//var outputDiv = document.getElementById('output');
//outputDiv.innerHTML = message;

//function for iterating through wrong and wright arrays
const buildList = (arr) => {
    let list = '<ol>';
    for (let i = 0; i < arr.length; i++) {
        list += '<li>' + arr[i] + '</li>';
    }
    list += '</ol>';
    return list;
}

//for iterating through questions and answers to see if right or wrong and push
//to appropriate place
for (let i = 0; i < questionsAnswers.length; i++) {
    question = questionsAnswers[i][0];
    answer = questionsAnswers[i][1];
    response = prompt(question);
    if (response === answer) {
        correctAnswers++;
        right.push(question);
    } else {
        wrong.push(question);
    }
}

html = 'You got ' + correctAnswers + ' question(s) right.';
print(html);
html += '<h5>You got these questions correct:</h5>';
html += buildList(right);
print(html);
html = '<h5>You got these questions wrong:</h5>';
html += buildList(wrong);
print(html);
