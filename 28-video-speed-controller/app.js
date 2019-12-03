const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');


// function to handle mouse move event
function handleMove(e) {
  // firure out location of scroll bar and mouse movements
  const y = e.pageY - this.offsetTop;
  // turn that into a percentage
  const percent = y / this.offsetHeight;
  // set min and max values of scroll bar
  const min = 0.1;
  const max = 4;
  const height = Math.round(percent * 100) + '%';
  const playbackRate = percent * (max - min) + min;
  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(2) + 'x';
  video.playbackRate = playbackRate;

}

// event listener for mousemove
speed.addEventListener('mousemove', handleMove);
