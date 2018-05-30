'use strict';

const allScreen = document.querySelectorAll(`template`);

const selectScreen = (screen) => {
  allScreen.forEach((el, index) => {
    if (screen === index) {
      const central = document.querySelector(`main.central`);
      const templateScreen = el.content;
      const screenContent = templateScreen.cloneNode(true);
      // central.innerHTML = screenContent;
      central.appendChild(screenContent);
    }
  });
};

let i = 0;
document.addEventListener(`keyup`, (evt) => {
  if (evt.keyCode === 37) {
    if (i !== 7) {
      selectScreen(i++);
    } else {
      evt.preventDefault();
    }

  } else if (evt.keyCode === 39) {
    if (i !== 0) {
      selectScreen(i--);
    } else {
      evt.preventDefault();
    }
  }
});
