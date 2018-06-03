'use strict';

const RIGHT_ARROW = 39;
const LEFT_ARROW = 37;
const ARROWS_HTML = `<div class="arrows__wrap">
<style>
  .arrows__wrap {
    position: absolute;
    top: 95px;
    left: 50%;
    margin-left: -56px;
  }
  .arrows__btn {
    background: none;
    border: 2px solid black;
    padding: 5px 20px;
  }
</style>
<button class="arrows__btn"><-</button>
<button class="arrows__btn">-></button>
</div>`;
const ARROWS = document.querySelectorAll(`.arrows__btn`);
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

document.body.insertAdjacentHTML(`beforeend`, ARROWS_HTML);

const switchScreen = (evt) => {
  if ((evt.type === `click` &&
      evt.target.textContent === `->` || evt.type === `keydown` && evt.keyCode === RIGHT_ARROW)) {
    selectScreen(current + 1);
  } else if ((evt.type === `click` &&
      evt.target.textContent === `<-` || evt.type === `keydown` && evt.keyCode === LEFT_ARROW)) {
    selectScreen(current - 1);
  }
};

for (let i = 0; i < ARROWS.length; i++) {
  ARROWS[i].addEventListener(`click`, (evt) => {
    switchScreen(evt);
  });
}

document.addEventListener(`keydown`, (evt) => {
  switchScreen(evt);
});
