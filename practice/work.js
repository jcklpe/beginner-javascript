// NOTE: run `npm install node-fetch` first
const fetch = require('node-fetch');

​
// baseline fetch without async or await function needed
// fetch('http://headers.jsontest.com')
//   .then((response) => {
//     return response.json();
//   })
//   .then((myJson) => {
//     console.log(myJson);
//   });
//   .catch ((error) => {
//     console.log(error)
//   })

​

const getHeaders = async url => {

  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;

  } catch (err) {
    console.log(err);
    return { json: {}, status: 'BOOM' }

  }

}

​

// (async function () {
//   const response = await fetch('http://headers.jsontest.com');
//   const json = await response.json();
// })();

​

// (async function () {
//   const json = await getHeaders('http://headers.jsontest.com/')
//   console.dir(json)
// })();

​

async function getThemHeaders () {
  const json = await getHeaders('http://headers.jsontest.com/')
  return json

}

​

async function main() {
  const headers = await getThemHeaders();
  const userAgent = headers['User-Agent'];
  const body = document.querySelector('body');
  const element = document.createElement('div');
  const content = document.createTextNode(userAgent);
  element.appendChild(content);
  body.appendChild(element);

}

​

main();

​

​

​
