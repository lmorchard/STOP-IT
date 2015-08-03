var clips = [
  "just-stop-it",
  "s-t-o-p-new-word-i-t",
  "stop-it-1",
  "stop-it-2",
  "stop-it-3",
  "stop-it-4",
  "stop-it-5",
  "stop-it-6",
  "stop-it-7",
  "stop-it-laughter-1",
  "stop-it-laughter-2",
  "stop-it-laughter-3",
  "stop-it-or-ill-bury-you-alive"//,
  //"we-definitely-dont-go-there",
  //"we-dont-go-there-1",
  //"we-dont-go-there-either"
];

var contentTypes = [
  ['mp3', 'audio/mpeg'],
  ['ogg', 'audio/ogg']
];

// Load the clips...
var clipsEl = document.getElementById('clips');

clips.forEach(function (name) {

  var audioEl = document.createElement('audio');
  audioEl.setAttribute('id', 'clip-' + name);
  audioEl.setAttribute('preload', 'auto');
  audioEl.src = '/clips/' + name + '.mp3';
  audioEl.mozAudioChannelType = 'content';

  clipsEl.appendChild(audioEl);

});

var playButtonEl = document.getElementById('play');
playButtonEl.addEventListener('click', function () {

  var allClips = document.querySelectorAll('#clips audio');
  for (var idx = 0; idx < allClips.length; idx++) {
    allClips[idx].pause();
  }

  var name = clips[Math.floor(Math.random() * clips.length)];
  var clipEl = document.getElementById('clip-' + name);

  if (window.chrome) {
    clipEl.load();
  } else {
    clipEl.currentTime = 0;
  }

  clipEl.play();
  return false;

});

var helpButtonEl = document.getElementById('help');
helpButtonEl.addEventListener('click', function () {
  document.body.classList.toggle('help');
});
