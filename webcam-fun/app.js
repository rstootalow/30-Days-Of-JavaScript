const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

// get video
function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false }) // this will return a promise
    .then(localMediaStream => {
      console.log(localMediaStream);

      video.srcObject = localMediaStream;
      video.play();
    })
      .catch(err => {
        console.error("Access to camer was denied!". err);
      });
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    // take the pixels out
    let pixels = ctx.getImageData(0, 0, width, height);
    // mess with them
    // pixels = redEffect(pixels);

    pixels = rgbSplit(pixels);
    // ctx.globalAlpha = 0.8;

    // pixels = greenScreen(pixels);
    // put them back
    ctx.putImageData(pixels, 0, 0);
  }, 16);
} // end of paintToCanvas

// function paintToCanvas() {
//   const width = width.videoWidth;
//   const height = video.videoHeight;
//   // console.log(width, height); this call the width and height of the actual video in the browser;
//
//   // make sure the canvas is the same saize as the webcam video
//   canvas.width = width;
//   canvas.height = height;
//
//   setInterval(() => {
//     ctx.drawImage(video, 0, 0, width, height); // pass in video element, start at top corners(0,0) and run the entire width and height
//   }, 16)
// } // end of paintToCanvas

getVideo();
