const dogs = [{name: 'Sadie', age: 9}, {name: 'Gracie', age: 6 }];

const anchor = document.querySelector('a');
console.log(anchor);

anchor.addEventListener('click', () => {
  anchor.classList.toggle('make-green');
});

// Regular
console.log('hello');

// Interpolated
console.log('Hello, I am a string %s', 'in the dev console!');

// Styled (possibly deprecated??)
// console.log('#c I am some good looking text!', 'font-size: 40px; color: purple:');

// Warning
console.warn('STRANGER DANGER!');

// Error
console.error('Try again, Rook!');

// Info
console.info('Great White sharks eat each other in the womb');

// Testing
const p = document.querySelector('p');

console.assert(p.classList.contains('ouch'), "That class does not exist on that element");

// Clearing console
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// console.clear();

// Grouping Together
dogs.forEach(dog => {
      console.groupCollapsed(`${dog.name}`);
      console.log(`This is ${dog.name}`);
      console.log(`${dog.name} is ${dog.age} years old`);
      console.log(`${dog.name} is ${dog.age * 7} dog years old`);
      console.groupEnd(`${dog.name}`);
    });

// Counting

console.count('Rich');
console.count('Kevin');
console.count('Rich');
console.count('Rich');
console.count('Rich');
console.count('Kevin');
console.count('Rich');
console.count('Rich');
console.count('Kevin');
console.count('Rich');
console.count('Kevin');
console.count('Rich');
console.count('Kevin');


// Timing
console.time('Currently Fetching Data....');

fetch('https://api.github.com/users/rstootalow')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('Currently Fetching Data....');
        console.log(data);
      });

// Table View
console.table(dogs);
