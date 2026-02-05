window.addEventListener('load', function () {
  //load up p tags
  duplicatePs(100);

  const arrayOfTextElements = document.querySelectorAll('.text');

  // animate initial elements on screen
  arrayOfTextElements.forEach((el) => {
    if (el.offsetTop < window.innerHeight) {
      el.classList.add('fade-in');
    }
  });

  const forceTextSlideUp = () => {
    arrayOfTextElements.forEach((el) => {
      const pageBottom = window.scrollY + window.innerHeight;
      const elPosition = el.offsetTop;
      const isHalfShown = pageBottom > el.offsetTop;
      const isNotScrolledPast = window.scrollY < elPosition;
      if (isHalfShown && isNotScrolledPast) {
        el.classList.add('slide-up');
      }
    });
  };

  window.addEventListener('scroll', () => forceTextSlideUp());
});

const duplicatePs = (quantity) => {
  let pTag = '';
  for (let i = 0; i < quantity; i++) {
    pTag += `<p class="text">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, dolore?
  </p>`;
  }
  document.getElementById('start').innerHTML = pTag;
};
