const triggers = document.querySelectorAll('.cool > li');
// console.log(triggers);
const background = document.querySelector('.dropdownBackground')
// console.log(background);
const nav = document.querySelector('.top');
// console.log(nav);

function handleEnter() {
  // console.log('enter')
  console.log(this);
  this.classList.add('trigger-enter');
  // FAT Arrow func will work because `this` inherits value of parent function
  setTimeout(() => this.classList.add('trigger-enter-active'), 200);

  /* This will not work because when you enter into a function, the value of `this` changes to current function  */
  // setTimeout(function() {
  //   this.classList.add('trigger-enter-active');
  // }, 150)
}

function handleLeave() {
  // console.log('leave');
  this.classList.remove('trigger-enter');
  setTimeout(() => this.classList.remove('trigger-enter-active'), 200);
}



// mouse event listeners for triggers
triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
