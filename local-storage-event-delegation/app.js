
// select form for adding items
const addItems = document.querySelector('.add-items');

// selector to select items off of menu
const itemsList = document.querySelector('.plates');

// empty array to store all selected items
const items = []


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
  populateList(items, itemsList)
  this.reset(); // form elements have reset() built in to them to clear after submissions.
}

function populateList(plates = [], platesList) {
  // loop over array of data and, using .map,  return one large string
  platesList.innerHTML = plates.map((plate, i) => {
    // return the html you want to inject into the document
    return `
      <li>
        <label for="">${plate.text}</label>
      </li>
    `;
  }).join('') // map will return an array. .join will join that data as one large string
}

addItems.addEventListener('submit', addItem);
