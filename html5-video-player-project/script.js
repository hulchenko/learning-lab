//#1 Get the Elements:
const player = document.querySelector(".player"); //papa div
const video = player.querySelector(".viewer");   //child div >>
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const ranges = player.querySelectorAll(".player__slider");
const skipButtons = player.querySelectorAll("[data-skip]"); //button element



//#2 Build functions:
function togglePlay(){ //on-video click on/off
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updateButton() { //toggling toggle button on event on/off
const icon = this.paused ? '►' : '❚❚';
    toggle.textContent = icon;
}

function skip() {
video.currentTime += Number(this.dataset.skip); //parseFloat is similar to Number(transforms string to a true Number)
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

//#3 Event listeners:
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

toggle.addEventListener("click", togglePlay);
skipButtons.forEach(button => button.addEventListener("click", skip));
ranges.forEach(range => range.addEventListener("change", handleRangeUpdate));
ranges.forEach(range => range.addEventListener("mousemove", handleRangeUpdate));


let mousedown = false;
progress.addEventListener("click", scrub); //in this case we will be looking at "offsetX" parameter inside the "click" event in console.


progress.addEventListener("mousemove", (e) => {
    if (mousedown) {
        scrub(e);
    }
}); 
/////////////////////////// OR ////////////////////
//progress.addEventListener("mousemove", (e) = > mousedown && scrub(e));

progress.addEventListener("mousedown", () => mousedown = true);
progress.addEventListener("mouseup", ()=> mousedown = false);

//#4 Fullscreen button:
function goFullScreen(id) {
    var element = document.getElementById(id);       
    if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
    }  
  }