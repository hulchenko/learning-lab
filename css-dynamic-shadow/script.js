const main = document.querySelector(".main");
const text = main.querySelector("h1");
const walk = 50; //50px is the amount of pixels shadow will maximum travel with the cursor

function shadow(e) {
let height = main.offsetHeight;
let width = main.offsetWidth;
//or let {offsetWidth: width, offsetHeight: height} = main;
let x = e.offsetX;
let y = e.offsetY;
//or let {offsetX: x, offsetY: y} = e;
if (this !== e.target) {
//this is the event listener, in our case it's main
// e.target will change depending on the element it's pointing

    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;

//child elements on page, such as h1 will reset offsets back to 0, as the window itself.
//to avoid that, below we take an existing x or y count and add preexisting values before cursor reaches the child element
}
    const xWalk = Math.round((x/width * walk) - (walk/2));
    const yWalk = Math.round((y/width * walk) - (walk/2));
    //this equation is to make total of 50px for the shadow travel, essentially making bottom right corner 25 and top left -25 (making total of 100px traveled)
    text.style.textShadow = /*default: `10px 10px 3px red`*/ `${xWalk}px ${yWalk}px 3px #94bbe9`;
}

main.addEventListener("mousemove", shadow);