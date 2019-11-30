const triggers = document.querySelectorAll('.cool > li');
// console.log(triggers);

const background = document.querySelector('.dropdownBackground')
// console.log(background);

const nav = document.querySelector('.top');
// console.log(nav);

function handleEnter() {
  console.log('enter')
}

function handleLeave() {
  console.log('leave');
}

// mouse event listeners for triggers
triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
