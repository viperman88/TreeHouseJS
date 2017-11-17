//JSON version
$('document').ready(() => {
    var url = '../data/employees.json';
    $.getJSON(url, (response) => {
        var statusHTML = '<ul class="bulleted">';
        $.each(response, (index, employee) => {
            if (employee.inoffice === true) {
                statusHTML += '<li class="in">';
            } else {
                statusHTML += '<li class="out">';
            }
            statusHTML += employee.name + '</li>';
        }); //end .each
        statusHTML += '</ul>';
        $('#employeeList').html(statusHTML);
    }); //end getJSON
}); //end ready

$('document').ready(() => {
    var url = '../data/rooms.json';
    $.getJSON(url, (response) => {
        var statusHTML = '<ul class="rooms">';
        $.each(response, (index, room) => {
            if (room.available === true) {
                statusHTML += '<li class="full">';
            } else {
                statusHTML += '<li class="empty">';
            }
            statusHTML += room.name + '</li>';
        }); //end .each
        statusHTML += '</ul>';
        $('#roomList').html(statusHTML);
    }); //end getJSON
}); //end ready

// //AJAX version
// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         var employees = JSON.parse(xhr.responseText);
//         var statusHTML = '<ul class="bulleted">';
//         for (var i = 0; i < employees.length; i += 1) {
//             if (employees[i].inoffice === true) {
//                 statusHTML += '<li class="in">';
//             } else {
//                 statusHTML += '<li class="out">';
//             }
//             statusHTML += employees[i].name;
//             statusHTML += '</li>';
//         }
//         statusHTML += '</ul>';
//         document.getElementById('employeeList').innerHTML = statusHTML;
//     }
// };
// xhr.open('GET', '../data/employees.json');
// xhr.send();
//
// var xhr2 = new XMLHttpRequest();
// xhr2.onreadystatechange = () => {
//     if (xhr2.readyState === 4 && xhr2.status === 200) {
//         var rooms = JSON.parse(xhr2.responseText);
//         var statusHTML = '<ul class="rooms">';
//         for (var i = 0; i < rooms.length; i += 1) {
//             if (rooms[i].available === true) {
//                 statusHTML += '<li class="full">';
//             } else {
//                 statusHTML += '<li class="empty">';
//             }
//             statusHTML += rooms[i].room;
//             statusHTML += '</li>';
//         }
//         statusHTML += '</ul>';
//         document.getElementById('roomList').innerHTML = statusHTML;
//     }
// };
// xhr2.open('GET', '../data/rooms.json');
// xhr2.send();
