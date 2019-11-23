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

// getVideo();
