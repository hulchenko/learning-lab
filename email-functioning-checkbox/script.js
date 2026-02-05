const checkboxes = document.querySelectorAll('.inbox input[type=checkbox]');
console.log(checkboxes);

let lastChecked;
let inBetween = false;

function handleCheck(e){
    //on SHIFT-key down + checkbox checked:
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }
            if (inBetween) {
                checkbox.checked = true;
            }
        })
    }
   
    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));