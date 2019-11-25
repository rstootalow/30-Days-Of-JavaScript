const hero = document.querySelector('.hero');
const text = document.querySelector('h1');
const walk = 500; // 100px

function shadow(e) {
  // console.log(event)
  // const width = hero.offsetWidth;
  // const height = hero.offsetHeight;

  // ES6 Destructuring
  const { offsetWidth: width, offsetHeight: height } = hero;
  // determine user's cursor location (use let since x,y values may change)
  let { offsetX : x, offsetY: y } = e; // will also get location of children elements starting at 0,0 which is bad

  /* this code will offset the difference between hero and child element being hovered. */
  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop
  }
  // console.log(x, y);

  const xWalk = Math.round((x / width * walk) - (walk / 2.5));
  const yWalk = Math.round((y / height * walk) - (walk / 2.5));

    text.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
      ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
      ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
      ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
    `;

  // console.log(x, y);
}

hero.addEventListener('mousemove', shadow);
