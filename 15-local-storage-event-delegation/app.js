
// select form for adding items
const addItems = document.querySelector('.add-items');

// selector to select items off of menu
const itemsList = document.querySelector('.plates');

// empty array to store all selected items
// const items = []

// local storage or empty area if no previous data. Will take localStorage and parse into array of objects
const items = JSON.parse(localStorage.getItem('items')) || []


function addItem(event) {
  event.preventDefault();
  // this refers to <form> querySelector grabs any element with name attr of item. Wrap in () as order of operations, querySelector first, then value of input
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false
  };
  // console.table(item);
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset(); // form elements have reset() built in to them to clear after submissions.
}

function populateList(plates = [], platesList) {
  // loop over array of data and, using .map,  return one large string
  platesList.innerHTML = plates.map((plate, i) => {
    // return the html you want to inject into the document
    return `
      <li>
      <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
  }).join('') // map will return an array. .join will join that data as one large string
}

// toggle function
function toggleDone(event) {
  if (!event.target.matches('input')) return // skip this UNLESS it is an input
  const eventListener = event.target;
  const index = eventListener.dataset.index;
  items[index].done = !items[index].done; // think of this as a boolean toogle. if false => true, if true => false;
  localStorage.setItem('items', JSON.stringify(items));
  // populate the list upon refresh
  populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList)
