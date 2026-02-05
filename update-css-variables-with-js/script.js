const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
   const suffix = this.dataset.sizing || '' // pulling 'data-' value from the element, in this case it's 'px', we use || '' is to avoid appending "undefined";
   document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));