const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  // console.log(this.value);
  // getting suffix of values for data sizing in input fields
  const suffix = this.dataset.sizing || ''; // selecting all data-sizing attr ('' represents base which has no data attr)
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
