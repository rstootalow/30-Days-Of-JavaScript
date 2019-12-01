const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');


function handleEnter() {
  // console.log(this);
  // add class to show dropdown menu
  this.classList.add('trigger-enter');
  // timeout delay for opacity transition with conditional logic to display intended menu
  setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
  // opacity for background display
  background.classList.add('open');


  // getting and setting coordinates and offsets for layout
  const dropdown = this.querySelector('.dropdown');
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  // object to store coords values
  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    // nav coords offset to account for possible layout issues
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left
  };

  // apply coord styles to dropdownBackground
  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

// handle mouse leave
function handleLeave() {
  // console.log('LEAVE');
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open');
}

// Event Listeners for mouse events
triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));



/*  SOME NOTES */

/* This will not work because when you enter into a function inside of another function, the value of `this` changes to current function  */
// setTimeout(function() {
//   this.classList.add('trigger-enter-active');
// }, 150)
