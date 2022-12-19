'use strict';

import throttle from 'lodash.throttle';
const LOCALSTORAGE_KEY = 'feedback-form-state';
const feedbackForm = document.querySelector('.feedback-form');
const feedbackFormInput = document.querySelector('.feedback-form input');
const feedbackFormTextarea = document.querySelector('.feedback-form textarea');

const feedbackFormData = {};

feedbackForm.addEventListener('submit', onFormSubmit);
feedbackForm.addEventListener('input', throttle(onUserInput, 500));

if (localStorage.getItem(LOCALSTORAGE_KEY)) {
  feedbackFormData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  feedbackFormInput.value = feedbackFormData.email ?? '';
  feedbackFormTextarea.value = feedbackFormData.message ?? '';
}

function onFormSubmit(e) {
  if (feedbackFormInput.value === '' || feedbackFormTextarea.value === '') {
    e.preventDefault();
    return;
  }
  e.preventDefault();
  e.target.reset();
  console.log(feedbackFormData);
  localStorage.removeItem(LOCALSTORAGE_KEY);
  Object.keys(feedbackFormData).forEach(key => {
    feedbackFormData[key] = '';
  });
}

function onUserInput(e) {
  feedbackFormData[e.target.name] = e.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedbackFormData));
}
