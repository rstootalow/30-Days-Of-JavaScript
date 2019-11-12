/* GET HTML ELEMENTS */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


/* BUILD OUT FUNCTIONS */

// Toggle Play
function togglePlay() {
  if(video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

// Change Play or Pause Icon
function changeButton() {
  const icon = this.paused ? '►' : '❚ ❚'; // this references the video player. show either icons based on play or pause event
  toggle.textContent = icon;
}

// Skip certain increments
function skip() {
  // console test
  // console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip) // parse float because it is DOM String Map
}

function handleRangeUpdate() {
  video[this.name] = this.value;
  // console.log(this.name);
  // console.log(this.name);
}

// update progress bar in real time
function handleProgress() {
  // make bar a percentage out of 100
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

// scrub video based on progress bar click
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

/* LINK ELEMENTS TO EVENT LISTENERS */

// toggle play event listeners and buttons
video.addEventListener('click', togglePlay);
video.addEventListener('play', changeButton);
video.addEventListener('pause', changeButton);
// for progress bar
video.addEventListener('timeupdate', handleProgress); // timeupdate is when video is updating time code.

// toogle actual button for play/pause
toggle.addEventListener('click', togglePlay);

// event listener for any elements with data-skip attr
skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

progress.addEventListener('click', scrub);
