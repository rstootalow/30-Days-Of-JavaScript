const hero = document.querySelector('.hero');
const text = document.querySelector('h1');

function shadow(event) {
  // console.log(event)
  // const width = hero.offsetWidth;
  // const height = hero.offsetHeight;

  // ES6 Destructuring
  const { offsetWidth: width, offsetHeight: height } = hero;
  // determine user's cursor location (use let since x,y values may change)
  let { offsetX : x, offsetY: y } = event; // will also get location of children elements starting at 0,0 which is bad

  /* this code will offset the difference between hero and child element being hovered. */
  if (this != event.target) {
    x = x + event.target.offsetLeft;
    y = y + event.target.offsetTop
  }

  // console.log(x, y);
}

hero.addEventListener('mousemove', shadow);
