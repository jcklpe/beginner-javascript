// Make a div
const wrapper = document.createElement(`div`);

// add a class of wrapper to it
wrapper.classList.add(`wrapper`);

// put it into the body
document.body.appendChild(wrapper);

// make an unordered list
const unorderedList = document.createElement(`ul`);

// add three list items with the words "one, two three" in them
const listItem1 = document.createElement(`li`);
listItem1.textContent = `one`;

const listItem2 = document.createElement(`li`);
listItem2.textContent = `two`;

const listItem3 = document.createElement(`li`);
listItem3.textContent = `three`;

unorderedList.append(listItem1, listItem2, listItem3);

// put that list into the above wrapper
wrapper.append(unorderedList);

const ulElement = wrapper.querySelector(`ul`);

// create an image
const image = document.createElement(`img`);

// set the source to an image
image.src = `https://picsum.photos/500`;

// set the width to 250
image.width = 250;

// add a class of cute
image.classList.add(`cute`);

// add an alt of Cute Puppy
image.alt = `Cute Puppy`;

// Append that image to the wrapper
wrapper.append(image);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
    <div class="myDiv">
        <p>one</p>
        <p>2</p>
    </div>
`;

// put this div before the unordered list from above
ulElement.insertAdjacentHTML(`beforebegin`, myHTML);
const myDiv = document.querySelector(`.myDiv`);
// add a class to the second paragraph called warning
myDiv.lastElementChild.classList.add(`warning`);

// remove the first paragraph
myDiv.lastElementChild.previousElementSibling.remove();

//- dog stuff
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard(name, age, height) {
  const ageInDogYears = age * 7;
  const html = `<div class="playerCard ${name}">
        <h2>${name} — ${age}</h2>
             <p>
             They are ${height} and ${age} years old. In Dog years this person would be ${ageInDogYears}. That would be a tall dog!
             </p>
            <button>DELETE</button>
</div>`;
  return html;
}

// make a new div with a class of cards
const cards = document.createElement(`div`);
cards.classList.add(`cards`);

// Have that function make 4 cards
const doug = generatePlayerCard(`Doug`, 12, `four inches`);
const jim = generatePlayerCard(`Jim`, 12, `four inches`);
const fivel = generatePlayerCard(`Fivel`, 12, `four inches`);
const dirkhim = generatePlayerCard(`Dirkehim`, 12, `four inches`);
// append those cards to the div
cards.innerHTML = doug + jim + fivel + dirkhim;

// put the div into the DOM just before the wrapper element
wrapper.insertAdjacentElement(`beforebegin`, cards);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const deleteButtons = document.body.querySelectorAll(`button`);

// make out delete function
function deleteCard(event) {
  const buttonThatGotClicked = event.currentTarget;
  buttonThatGotClicked.closest(`.playerCard`).remove();
}

// loop over them and attach a listener

deleteButtons.forEach(button => {
  button.addEventListener(`click`, deleteCard);
});
