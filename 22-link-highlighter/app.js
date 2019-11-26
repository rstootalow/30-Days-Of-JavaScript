const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');

// add highlight element to body of document
document.body.append(highlight);

// function to highlight Link
function highlightLink() {
  // TEST
  console.log('Highlighting'); // Working
  console.log('****** Logging This ******');
  console.log(this);
  // const linkCoords = this.getBouncingClientRect();
}

// event listener for hovering
triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
