const signupForm = document.querySelector(`[name="signup"]`);

signupForm.addEventListener(`submit`, function(event) {
  const name = event.currentTarget.name.value;
  if (name.includes(`chad`)) {
    alert(`sorry bro`);
    event.preventDefault();
  }
});

signupForm.name.addEventListener(`keyup`, function(event) {});
