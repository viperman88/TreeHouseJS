var questionsAnswers = [
    ['what is my name?', 'Robert'],
    ['who is my wife?', 'Maggie'],
    ['who is our dog?', 'Franklin']
];
var correctAnswers = 0;
var question;
var answer;
var response;
var html;
var right = [];
var wrong = [];

function print(message) {
    //var outputDiv = document.getElementById('output');
    //outputDiv.innerHTML = message;
    document.write(message);
}

function buildList(arr) {
    var list = '<ol>';
    for (var i = 0; i < arr.length; i++) {
        list += '<li>' + arr[i] + '</li>';
    }
    list += '</ol>';
    return list;
}

for (var i = 0; i < questionsAnswers.length; i++) {
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
