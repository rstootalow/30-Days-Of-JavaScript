// select all checkbox inputs
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

// select checkboxes with checked attr
document.querySelector('button').addEventListener('click', clearSelection);

// init variable for the last checkbox checked
let lastChecked;

// function to process if/when a checkbox is lastChecked
function handleCheck(event) {
  // variable to identify checkboxes between 1st and 2nd box checked.
  let inBetween = false;
  // check if shift key is down when clicking AND check if box is checked
  if(event.shiftKey && this.checked) {
    // loop over each checkbox
    checkboxes.forEach(checkbox => {
      // console.log(this);
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked ) {
        inBetween = !inBetween;
        console.log('Starting to check them in between!')
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;

} // end of handleCheck function

function clearSelection(event) {
  checkboxes.forEach(checkbox => checkbox.checked = false);
}

//event listener for click of checkbox
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
