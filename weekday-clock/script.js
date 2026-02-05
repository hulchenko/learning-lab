const clock = document.querySelector('.clock');
const today = new Date().getDay();
const days = document.querySelectorAll('.week p');
const hrs = document.querySelector('.hrs');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
const twelve = document.querySelector('.twelve');
const twentyFour = document.querySelector('.twenty-four');
let displayTwelve = true;

//Set highlighted day
days[today].classList.add('day');

function showTime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let amPm = h < 12 ? 'AM' : 'PM';

  twelve.addEventListener('click', function () {
    displayTwelve = true;
    twentyFour.classList.remove('switch');
    twelve.classList.add('switch');
  });

  twentyFour.addEventListener('click', function () {
    displayTwelve = false;
    twentyFour.classList.add('switch');
    twelve.classList.remove('switch');
  });

  // AM/PM
  if (displayTwelve && h === 0) {
    h = 12;
  }

  if (displayTwelve && h > 12) {
    h = h - 12;
  }

  // 0 formatting
  if (h < 10) {
    h = '0' + h;
  }
  if (m < 10) {
    m = '0' + m;
  }
  if (s < 10) {
    s = '0' + s;
  }

  hrs.innerHTML = `${h}`;
  min.innerHTML = `${m}`;

  if (displayTwelve) {
    sec.innerHTML = `${s} ${amPm}`;
  } else {
    sec.innerHTML = `${s}`;
  }

  setTimeout(showTime, 1000);
}

showTime();
