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
    .map(voice => `<option value=${voice.name}>${voice.name} (${voice.lang})</option>`)
    .join('');
}
// using speechSynthesis global variable
speechSynthesis.addEventListener('voiceschanged', populateVoices);
