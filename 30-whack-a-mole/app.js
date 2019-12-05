const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

let lastHole; // to prevent multiple appearances of moles in same hole
let timeUp = false // timer for mole popup
let score = 0;

// generate random time for mole popup frequency
function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// random hole generator
function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    console.error(' Not possible to select same hole consecutivley');
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

// time how long mole pops up
function peep(){
  const time = randomTime(20, 2000);
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) peep();
  }, time);
}

// start game function
function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => timeUp = true, 10000);
}

function bonk(e) {
  if (!e.isTrusted) return;
  score++;
  this.parentNode.classList.remove('up');
  scoreBoard.textContent = score;
}

// event listener for cliked moles
moles.forEach(mole => mole.addEventListener('click', bonk));
