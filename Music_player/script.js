const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const playButton = document.getElementById("play");
const progress = document.getElementById("progress");
const volumeControl = document.getElementById("volume");

const songs = [
  {
    title: "Ikko Mikke",
    artist: "Satinder Sartaaj",
    src: "music/song1.mpeg",
  },
  {
    title: "Rutba",
    artist: "Satinder Sartaaj",
    src: "music/song2.mpeg",
  },
  {
    title: "Dila'n Di Gall",
    artist: "Satinder Sartaaj",
    src: "music/song3.mpeg",
  },
];

audio.volume = volumeControl.value / 100;

volumeControl.addEventListener("input", (e) => {
  audio.volume = e.target.value / 100;
});

audio.addEventListener("loadeddata", () => {
  audio.volume = volumeControl.value / 100;
});
let songIndex = 0;

function loadSong(song) {
  title.innerText = song.title;
  artist.innerText = song.artist;
  audio.src = song.src;
}

function playPause() {
  if (audio.paused) {
    audio.play();
    playButton.innerHTML = "&#10074;&#10074;";
  } else {
    audio.pause();
    playButton.innerHTML = "&#9658;";
  }
}

function prevSong() {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  audio.play();
  playButton.innerHTML = "&#10074;&#10074;";
}

function nextSong() {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  audio.play();
  playButton.innerHTML = "&#10074;&#10074;";
}

function updateProgress() {
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  progress.value = progressPercent;
}

function setProgress() {
  audio.currentTime = (progress.value / 100) * audio.duration;
}

audio.addEventListener("timeupdate", updateProgress);
progress.addEventListener("input", setProgress);

loadSong(songs[songIndex]);
