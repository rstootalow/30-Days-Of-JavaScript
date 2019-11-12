// array to store key presses
const pressedKey = [];

// secret code to trigger cornify
const secretCode = 'chadwick'

window.addEventListener('keyup', (e) => {
  console.log(e.key);
  // push key press into array
  pressedKey.push(e.key);
  // limit number of characters allowed into pressed array
  pressedKey.splice(-secretCode.length - 1, pressedKey.length - secretCode.length);
  if (pressedKey.join('').includes(secretCode)) {
    console.log('WINNER WINNER');
    cornify_add();
  }
  console.log(pressedKey);
})
