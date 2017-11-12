var html = '';
var red;
var green;
var blue;
var rgbColor;
var numCircles = 100;

function RGBcreate() {
    return Math.floor(Math.random() * 256);
}

for (var i = 0; i < numCircles; i++) {
    red = RGBcreate();
    green = RGBcreate();
    blue = RGBcreate();
    rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    html += '<div style="background-color:' + rgbColor + '"></div>';
}

document.write(html);
