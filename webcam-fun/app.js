const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const context = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');


// Get Video
function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })  // grabs video and reuturns promise
    .then(localMediaStream => {
      console.log(localMediaStream);

      video.srcObject = localMediaStream;
      video.play();
    }) // end of promise
    // error
    .catch(err => {
      console.error('Access to the camera has been denied!', err);
    });
} // end of getVideo

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    context.drawImage(video, 0, 0, width, height);
    // take pixels out
    let pixels = context.getImageData(0, 0, width, height);
    // mess around with them
    // pixels = redEffect(pixels);

    pixels = rgbSplit(pixels);
    // context.globalAlpha = 0.8;

    // pixels = greenScreen(pixels);
    //put them back
    context.putImageData(pixels, 0, 0);

  }, 16) // end of setInterval
} // end of paintToCanvas

// take photo
function takePhoto() {
  snap.currentTime = 0;
  snap.play();

  // take the data out of the canvas
  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'handsome');
  link.innerHTML = `<img src="${data}" alt="For sure a 7!" />`;
  strip.insertBefore(link, strip.firstChild)
} // end of takePhoto

// red effect
function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i =+ 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 200; // RED
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // BLUE
  }
  return pixels;
}  // end of redEffect

function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 500] = pixels.data[i + 0]; // RED
    pixels.data[i + 500] = pixels.data[i + 1]; //GREEN
    pixels.data[i - 550] = pixels.data[i + 2]; // BLUE
  }
  return pixels;
} // end of rgbSplit


// Greenscreen
function greenScreen(pixels) {
  // empty object to store values
  const levels = {};

  document.querySelectorAll('.rbg input').forEach((input) => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];


    // nested if statement to compare rbg values
    if ( red >= levels.rmin
        && green >= levels.gmin
        && blue >= levels.bmin
        && red <= levels.rmax
        && green <= levels.gmax
        && blue <= levels.bmax) {
          // take it out
          pixels.data[i + 3] = 0;
        }
  }

  return pixels
} // end of greenScreen

// Call getVideo
getVideo();

video.addEventListener('canplay', paintToCanvas);
