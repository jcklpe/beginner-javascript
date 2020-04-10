const p = document.querySelector(`p`);

console.log(p);

const pizzaList = document.querySelector(`.pizza`);
pizzaList.insertAdjacentText(`beforeend`, `pizza`);

const pic = document.querySelector(`.nice`);

function toggleRound() {
  return pic.classList.toggle(`round`);
}
pic.addEventListener(`click`, toggleRound);
