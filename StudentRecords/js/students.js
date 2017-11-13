var students = [{
        name: 'Robert',
        track: 'JavaScript',
        achievements: 4,
        points: 556
    },
    {
        name: 'Maggie',
        track: 'Front End',
        achievements: 14,
        points: 1097
    },
    {
        name: 'Joel',
        track: 'Ruby',
        achievements: 6,
        points: 356
    },
    {
        name: 'Hans',
        track: 'iOS',
        achievements: 12,
        points: 2556
    },
    {
        name: 'Ashley',
        track: 'HTML',
        achievements: 3,
        points: 956
    }
];

var student;
var message = '';
var search;

function print(message) {
    var div = document.getElementById('output');
    div.innerHTML = message;
    //document.write(message);
}

function getStudentReport(student) {
    var report = '<h2>Students name: ' + student.name + '<h2>';
    report += '<p>Track: ' + student.track + '</p>';
    report += '<p>Achievements: ' + student.achievements + '</p>';
    report += '<p>Points: ' + student.points + '</p>';
    return report;
}

while (true) {
    search = prompt('Search for records. Type list to show all, quit to exit.')
    if (search === null || search.toLowerCase() === 'quit') {
        break;
    }
    for (var i = 0; i < students.length; i++) {
        student = students[i];
        if (student.name === search) {
            message = getStudentReport(student);
            print(message);
        } //else {
        //message = 'Student name not in records.';
        //print(message);
        //}
    }
}
