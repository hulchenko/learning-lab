const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.lines');
let items = JSON.parse(localStorage.getItem('items')) || [];// #1 storing data in here
                                                            // #2 JSON parse reverses string conversion, back to objects

function addItem(e) {
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false
  };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));//convert to strings, local Storage only saves strings
  this.reset();
}

function populateList(lines = [], linesList) {
  linesList.innerHTML = lines.map((line, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${line.done ? 'checked' : ''} />
        <label for="item${i}">${line.text}</label>
      </li>
    `;
  }).join('');
}

function toggleDone(e) {
  if (!e.target.matches('input')) return; // skip this unless it's an input
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);//pulls stored info from the const items in the beginning of the page, by the end of the page processing.
}


addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);

    ////reset button
document.querySelector(".reset").addEventListener("click", resetLocalData); 

function resetLocalData() {
    localStorage.clear();
    window.location.reload();
}