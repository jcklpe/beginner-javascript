const myParagraph = document.createElement(`p`);
myParagraph.textContent = `I am a P`;
myParagraph.classList.add(`special`);

const myImage = document.createElement(`img`);
myImage.src = `https://picsum.photos/500`;
myImage.alt = `Nice Photos`;

const myDiv = document.createElement(`div`);
myDiv.classList.add(`wrapper`);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);
