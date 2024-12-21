// highlight words of 8 and over
const pHighlight = document.querySelector("#p-highlight");
const words = pHighlight.innerHTML.split(/\s+/); // split on whitespace
const highlightedWords = words
  .map((word) => {
    if (word.length >= 8) {
      return `<span style="background: yellow">${word}</span>`;
    }
    return word;
  })
  .join(" ");

// create a list
const list = document.createElement("ul");
const sentences = highlightedWords.split(/\.+/).map((sentence) => {
  const li = document.createElement("li");
  li.innerHTML = sentence;
  list.appendChild(li);
});
pHighlight.innerHTML = ""; // clear the initial paragraph
pHighlight.appendChild(list);

// add event listener to .todo-app > .item
const todoItems = document.querySelector(".todo-app").childNodes;
console.log(todoItems);
todoItems.forEach((item) => {
  item.style = "cursor: pointer";
  item.addEventListener("click", (event) => {
    console.log(`clicked!`, event.target.innerHTML);
  });
});
// Supposedly this is more performant
// const toDo = document.querySelector(".todo-app");
// toDo.addEventListener("click", (event) => {
//   if (event.target.classList.contains("item")) {
//     console.log(`Clicked!`, event.target.innerHTML);
//   }
// });
