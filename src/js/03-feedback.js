'use strict';

import throttle from 'lodash.throttle';
const LOCALSTORAGE_KEY = `feedback-form-state`;
const feedbackForm = document.querySelector('.feedback-form');
const feedbackFormInput = document.querySelector('.feedback-form input');
const feedbackFormTextarea = document.querySelector('.feedback-form textarea');

const feedbackFormData = {};

feedbackForm.addEventListener(`submit`, onFormSubmit);
feedbackForm.addEventListener(`input`, throttle(onUserInput, 500));

if (localStorage.getItem(LOCALSTORAGE_KEY)) {
  feedbackFormData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  feedbackFormInput.value = feedbackFormData.email ?? '';
  feedbackFormTextarea.value = feedbackFormData.message ?? '';
}
