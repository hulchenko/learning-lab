function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  const sliderImages = document.querySelectorAll (".slide-in");

  //whenever image peeks 50% on the screen, we want it pop-up:
  //#1 window.scrollY - will show current window position, based off of the upper part of the screen
  //#2 if we add window.innerHeight to it, we will get the same information, but based off of the bottom part of the screen
  //#3 then we want to ensure we're at the half of the image position, so we take image height, divide it in half and deduct it from the current position, therefore pushing window back a bit, exactly where the image at it's 50% is.
  function checkSlide(e) {
    sliderImages.forEach(sliderImage => {
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
 //#4 same, but reversed, for the scrolls from the bottom to the top
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add("active");
        } else {
            sliderImage.classList.remove("active");
        }
        });
    }

  window.addEventListener("scroll", debounce(checkSlide));