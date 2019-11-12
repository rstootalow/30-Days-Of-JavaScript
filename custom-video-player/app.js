/* GET HTML ELEMENTS */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('progress_filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player_slider');


/* BUILD OUT FUNCTIONS */
function togglePlay() {
  if(video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

/* LINK ELEMENTS TO EVENT LISTENERS */
