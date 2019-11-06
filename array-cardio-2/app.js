const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Cate', year: 1986 },
  { name: 'Chadwick', year: 1970 },
  { name: 'Kevin', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good!', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my favorite food ever', id: 123523 },
  { text: 'Nice Nice Nice', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// const isAdult = people.some(function(person) {
//   const currentYear = (new Date()).getFullYear();
//   if(currentYear - person.year >= 19) {
//     return true;
//   }
// });

// REFACTOR 1
// const isAdult = people.some(person => {
//   const currentYear = (new Date()).getFullYear();
//   return currentYear - person.year >= 19;
// })

// REFACTOR 2
const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19 );
console.log('********* Checking For One Adult ********');
console.log(isAdult);

// Array.prototype.every() // is everyone 19 or older?
// const allAdults = people.every(function(person) {
//   const currentYear = (new Date()).getFullYear();
//   if(currentYear - person.year >= 19)
//   return true;
// })

// REFACTOR 1
// const allAdults = people.every(person => {
//   const currentYear = (new Date()).getFullYear();
//   return currentYear - person.year >= 19;
// });

// REFACTOR 2
const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
console.log('******** Checking If All Are Adults ********');
console.log(allAdults)

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
// const comment = comments.find(function(comment) {
//   if(comment.id === 823423) {
//     return true;
//   }
// });

// FAT ARROW REFACTOR
const comment = comments.find(comment => {
  return comment.id === 823423;
});

console.log('****** Check for Specific ID ******');
console.log(comment);

// Array.prototype.findIndex()
// Find the comment with this ID
const index = comments.findIndex(comment => comment.id === 823423)
console.log('****** Find Index of ID 823423');
console.log(index);
// delete the comment with the ID of 823423

/* SPLICE Method */
comments.splice(index, 1);
console.log('****** Table View of New Comments with ID Deleted');
console.table(comments);
