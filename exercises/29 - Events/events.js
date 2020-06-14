const butts = document.querySelector(`.butts`);

function handleClick() {
  console.log(`this does nothing`);
}

butts.addEventListener(`click`, handleClick);

//-  Event handler loop nodelist pattern
// query select all buttons
const buyButtons = document.querySelectorAll(`button.buy`);
