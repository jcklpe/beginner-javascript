const terms = document.querySelector(`.terms-and-conditions`);
const watch = document.querySelector(`.watch`);
const button = document.querySelector(`.accept`);

const observer = new IntersectionObserver(observerCallback, {
  root: terms,
  threshold: 1,
});

function observerCallback(payload) {
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    //
    observer.unobserve(terms.lastElementChild);
  }
}

observer.observe(terms.lastElementChild);
