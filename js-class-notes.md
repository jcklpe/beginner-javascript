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

