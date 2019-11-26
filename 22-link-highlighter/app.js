const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');

// add highlight element to body of document
document.body.append(highlight);

// function to highlight Link
function highlightLink() {
  // TEST
  // console.log('Highlighting'); // Working
  // console.log('****** Logging This ******');
  // console.log(this);
  const linkCoords = this.getBoundingClientRect()
  console.log(linkCoords);
  // coordinate object to align highlight properly
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX
  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

// event listener for hovering
triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
