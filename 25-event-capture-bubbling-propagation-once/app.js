const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e) {
  console.log(this.classList.value);
  // propagation to stop Bubbling
  // e.stopPropagation();
  // console.log(this);
}


// event listener for div clicks
divs.forEach(div => div.addEventListener('click', logText, {
  capture: true, // works outside in. if 3 is clicked, it will find most outer elements and count in from there
  once: true
}));

// event listener for button
button.addEventListener('click', () => {
  console.log('CLICKED!!');
}, {
  once: true // when true, will only allow button to click once.
})
