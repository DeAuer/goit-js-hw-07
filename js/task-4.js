'use strict';
const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const data = {};
  const formData = new FormData(event.target);
  for (const value of formData.values()) {
    if (value.trim() === '') {
      return alert('All form fields must be filled in');
    }
  }
  for (const [key, value] of formData.entries()) {
    data[key] = value.trim();
  }
  console.log(data);
  form.reset();
});
