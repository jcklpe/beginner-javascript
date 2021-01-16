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

# Objects and Variables: Passing by Reference versus Passing by Value

Strings are passed by value.

Objects and Arrays are passed by reference.

# Array Methods

## Pop versus Unshift

Why are so many language's array prepend function called unshift and not prepend?

> The "prepend" operation is often called "unshift" when the "array" is used as a deque (ie. a data structure that can be used to implement both a stack and a queue).
> The operation to add something (an "item") to a deque is often called "push". If you see the deque as a stack (First In, Last Out), you need an operation to get the the item that was pushed most recently, this operation is often called "pop".
> Now if you see the deque as a queue (First In, First Out) you need an operation to get the item that was pushed least recently. This operation is called "shift" because if you have implemented the deque with a fixed origin it means shifting all the items except the first one one position towards this origin. Of course, this is not a very efficient of a deque used as a list...
> Actually the real origin of the name "shift" is probably shift registers, which does something similar in hardware (http://en.wikipedia.org/wiki/Shift_register).
> Oh, and unshift... I guess it's just an invented word for "the opposite of shift".
> The most logical convention in that respect is probably the one used in the C++ STL: call push "push_back", unshift "push_front", pop "pop_back" and shift "pop_front".
-- [source](https://www.quora.com/Why-are-so-many-languages-array-prepend-function-called-unshift-and-not-prepend)

So push pushes something into the end of the array. Unshift pushes something into the front of the array. Pop grabs something from the end of the array, shift grabs something from the beginning of the array.
