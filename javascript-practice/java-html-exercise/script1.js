// a <p> with red text that says “Hey I’m red!”
let para = document.createElement("p");
para.textContent = "Hey, I'm red!";
para.style.color = "red";
document.getElementById("container").appendChild(para);


//an <h3> with blue text that says “I’m a blue h3!”
let blueText = document.createElement("h3");
blueText.textContent = "I'm a blue h3!";
blueText.style.color = "blue";
document.getElementById("container").appendChild(blueText);

//a <div> with a black border and pink background color with the following elements inside of it:
//1. another <h1> that says “I’m in a div”
//2. a <p> that says “ME TOO!”
//3. Hint for this one: after creating the div with createElement, append the <h1> and <p> to it before adding it to the container.

//div
let divElement = document.createElement("div");
divElement.style.backgroundColor = "pink";
divElement.style.border = "solid grey";
divElement.setAttribute("id", "divId");
document.getElementById("container").appendChild(divElement);
//h1
let hElement = document.createElement("h1");
hElement.textContent = "I'm in a div";
document.getElementById("divId").appendChild(hElement);
//p
let pElement = document.createElement("p");
pElement.textContent = "ME TOO!";
document.getElementById("divId").appendChild(pElement);