var playlist = new Playlist();

var rodeo = new Song('Rodeo', 'Garth Brooks', '4:01');
var amarilloByMorning = new Song('Amarillo by Morning', 'George Straight', '3:39');

playlist.add(rodeo);
playlist.add(amarilloByMorning);

var playListElement = document.getElementById('playlist');

playlist.renderInElement(playListElement);

var playButton = document.getElementById('play');
  playButton.onclick = function() {
  playlist.play();
  playlist.renderInElement(playListElement);
}
var nextButton = document.getElementById('next');
  nextButton.onclick = function() {
  playlist.next();
  playlist.renderInElement(playListElement);
}
var stopButton = document.getElementById('stop');
  stopButton.onclick = function() {
  playlist.stop();
  playlist.renderInElement(playListElement);
}
