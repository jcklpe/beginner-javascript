# Useful DOM built-in functions

## create nodes

```javascript
// create an element
document.createElement(`p`);

// removes a node
node.remove();

// create elements from template strings
const myFragment = document.createRange().createContextualFragment(`
<div>
	<p> any kind of template string can go in here </p>
</div>`);

```

## appending/inserting elements

```javascript
// append an element into another HTML element. Can only accepts Node objects
ParentNode.appendChild(myDiv);

//append an element into another HTML element. can also append strings. 
ParentNode.append(myDiv);

// insert element adjacent to another
node.insertAdjacentElement(`afterbegin`, nodetobeinserted);
```



## editing nodes

```javascript
// change the text content of a node
Node.innerText = `this is the new content of the node`;
Node.textContent = `just like innerText except it ignores invisible content like styling or script tags etc`;

// add a class to the element/node
Node.classList.add(`class-name`);

//set image alt data
img.alt =`description of photo`;

// set image source to a different url
img.src = `set image source`;
```



## selecting parent/child/sibling nodes

```javascript
// select children elements
node.children;

// you get the child nodes
node.childNode;

// you get the last child element
node.lastElementChild;

// grabs the sibling that is immediately above it in the html file
node.previousElementSibling;

// same but it's the next element
nodenextElementSibling;

// grab the parent element
node.parentElement;
```

## Attaching an event listener procedurally

```javascript
// select all buttons
const buyButtons = document.querySelectorAll(`button.buy`);

// declare action function
function buyItem() {
  const aDiv = document.createElement(`div`);
  aDiv.textContent = `nice!`;
  document.body.append(aDiv);
}

//attach event listener to an event object
function attachEventListener(event) {
  event.addEventListener(`click`, buyItem);
}

// loop through all buttons and attach listeners to it.
buyButtons.forEach(attachEventListener);
```

## Attach event listener to element clicked

```javascript
// select all buttons
const buyButtons = document.querySelectorAll(`button.buy`);

// declare action function
function handleBuyButtonClick(event) {
   // select event argument 
  const button = event.target;
  console.log(event.target === event.currentTarget);
}

// declare event listener attachment function
function attachListener(buyButton) {
  buyButton.addEventListener(`click`, handleBuyButtonClick);
    
}    

// loop through buttons and attach the listener
buyButtons.forEach(attachListener);
```

