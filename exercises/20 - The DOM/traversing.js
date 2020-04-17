const wes = document.querySelector(`.wes`);
const lux = document.querySelector(`.lux`);

console.log(wes.children);
// you get tags

console.log(wes.childNode);
// you get the nodes

console.log(wes.lastElementChild);
// last child element

console.log(lux.previousElementSibling);
// grabs lux which is the sibling that is immediately above it in the html file

console.log(wes.nextElementSibling);
// same but it's the next element

console.log(wes.parentElement);
// self explanatory at this point
