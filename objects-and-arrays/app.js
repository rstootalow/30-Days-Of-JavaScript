// start with strings, numbers and booleans

// Numbers
let age = 100;
let age2 = age;
console.log(age, age2);
// reassigning value of age will not change value of age BEFORE reassignment
age = 200; // copy not a reference
console.log(age, age2);

// Strings
let name = 'Rich';
let name2 = name;
console.log(name, name2);
// reassigning value of name will not change value of name BEFORE reassignment
name = 'Richard'; // copy NOT a reference
console.log(name, name2);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
// and we want to make a copy of it.
const team = players;
console.log('****** Logging PLayers and Team ******');
console.log(players, team);
// You might think we can just do something like this:
// team[3] = 'Lux';
// console.log(team);
// console.log(players);
// however what happens when we update that array?
// now here is the problem!
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
/* SLICE METHOD */
const team2 = players.slice();
console.log('****** Logging Team 2 using Slice() ******');
console.log(team2);

/* CONCAT METHOD */
const team3 = [].concat(players);
console.log('****** Concat copy of array with Team 3 ******');
console.log(team3);

// or use the new ES6 Spread

const team4 = [...players]; //takes every item out of iterable and into container array
team4[3] = 'someother person';
console.log(team4);
console.log(players);

/* Another method */
const team5 = Array.from(players);
console.log('****** Logging Team 5 ******');
console.log(team5);


// now when we update it, the original one isn't change
// The same thing goes for objects, let's say we have a person object
// with Objects
const person = {
  name: 'Rich Tutalo',
  age: 80
};
// and think we make a copy:
const captain = person;
captain.number = 99;

/* Will make a reference not a copy. */

console.log('****** Logging Captain ******');
console.log(captain);
console.log('****** Logging Person ******');
console.log(person);

// how do we take a copy instead?
const captain2 = Object.assign({}, person, {number: 99, age: 12 });
console.log('***** Logging New Captain Obj (Age will be diff bc it is COPY not REF)******');
console.log(captain2);
// We will hopefully soon see the object ...spread
// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
