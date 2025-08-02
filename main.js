import { showModal, hideModal } from './modal';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('survey-form');
  const closeBtn = document.getElementById('close-modal');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    showModal();
    form.reset(); // Reset the form after submission
  });

  closeBtn.addEventListener('click', () => {
    hideModal();
  });
});
