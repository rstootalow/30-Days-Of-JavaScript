const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
// setting default text on load
msg.text = document.querySelector('[name="text"]').value;


function populateVoices() {
  // store getVoices into voices array

  voices = this.getVoices();
  voicesDropdown.innerHTML = voices
    .filter(voice => voice.lang.includes('en')) // filtering to only english languages. 
    .map(voice => `<option value=${voice.name}>${voice.name} (${voice.lang})</option>`)
    .join('');
}

function setVoice() { // to set voice we need to find the correct speechSynthesis object we are selecting
  // console.log('Changing voice');
  console.log(this.value);
  msg.voice = voices.find(voice => voice.name === this.value);
}

// functionj to restart voice playing process once it is done playing
function toggle(startOver = true) {
    speechSynthesis.cancel(); // stop voice from speaking.catch
    if (startOver) {
      speechSynthesis.speak(msg); // play newly selected voice.
    }
}

function setOption() {
  console.log(this.name, this.value);
  msg[this.name] = this.value;
  toggle();
}


// using speechSynthesis global variable
speechSynthesis.addEventListener('voiceschanged', populateVoices);

// event listener when voice type changes
voicesDropdown.addEventListener('change', setVoice);

// options
options.forEach(option => option.addEventListener('change', setOption));

// speak button
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', toggle.bind(null, false));
