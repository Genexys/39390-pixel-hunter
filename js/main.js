'use strict';

const RIGHT_ARROW = 37;
const LEFT_ARROW = 39;

const central = document.querySelector(`main.central`);
const selectSlide = (element) => {
  central.innerHTML = ``;
  central.appendChild(element.cloneNode(true));
};

const allScreens = Array.from(document.querySelectorAll(`template`)).
map((it) => it.content);

let current = 0;
const selectScreen = (index) => {
  index = index < 0 ? allScreens.length - 1 : index;
  index = index >= allScreens.length ? 0 : index;
  current = index;
  selectSlide(allScreens[current]);
};

document.addEventListener(`keydown`, (evt) => {
  switch (evt.keyCode) {
    case RIGHT_ARROW:
      selectScreen(current + 1);
      break;
    case LEFT_ARROW:
      selectScreen(current - 1);
      break;
  }
});

selectScreen(0);

