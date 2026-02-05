//const timeNodes = document.querySelectorAll("[data-time]"); //node list, not an array
//const timeNodes = [...document.querySelectorAll("[data-time]")]; //#1 variant to turn node into an array
const timeNodes = Array.from(document.querySelectorAll("[data-time]")); //#2 variant to turn node into an array
const seconds = timeNodes
.map(node => node.dataset.time) //pulling time stamps from each video, from an array to a string 
.map(timeCode => { //breaking timestamps into minutes and seconds
    const [mins, secs] = timeCode.split(":").map(parseFloat);//assigned mins and secs variable to the according time stamps, eliminated ":" between digits and changed from strings to Numbers with parseFloat
    return (mins * 60) + secs; //turn individual time stamps to seconds
})
.reduce((total, vidSeconds) => { //take all of the time stamps that are turned into seconds and combine into one big number
    return total + vidSeconds;
});

let secondsLeft = seconds;
let hours = Math.floor(secondsLeft / 3600); //get total amount of whole hours
secondsLeft = secondsLeft % 3600; //resulting leftover amount of seconds left, after whole hours were identified

let mins = Math.floor(secondsLeft / 60); //get total number of whole minutes
secondsLeft = secondsLeft % 60; //resulting leftover amount of seconds left, after whole mins were identified

console.log(hours, mins, secondsLeft);