# Useful DOM built-in functions

```javascript
// create an element
document.createElement(`p`);

// change the text content of a node
Node.innerText = `this is the new content of the node`;
Node.textContent = `just like innerText except it ignores invisible content like styling or script tags etc`;

// add a class to the element/node
Node.classList.add(`class-name`);

// append an element into another HTML element. Can only accepts Node objects
ParentNode.appendChild(myDiv);

//append an element into another HTML element. can also append strings. 
ParentNode.append(myDiv);

//set image alt data
img.alt =`description of photo`;

// set image source to a different url
img.alt = `set image source`;

// insert element adjacent to another
node.insertAdjacentElement(`afterbegin`, nodetobeinserted);

```

