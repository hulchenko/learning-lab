const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

toggle.addEventListener('click', function () {
  if (toggle.classList.contains('active')) {
    toggle.classList.remove('active');
    navigation.classList.remove('active');
  } else {
    toggle.classList.add('active');
    navigation.classList.add('active');
  }
});
