const start_screen = document.querySelector('.start-screen');
const start_button = document.querySelector('#start');
const gallery = document.querySelector('.gallery')

function removeElement(target) {
    setTimeout(() => {
        target.remove();
      }, 3 * 1000);
  }


start_button.addEventListener('click', () => {
    start_screen.classList.add("open");
    gallery.classList.add("open");
    removeElement(start_screen);
});