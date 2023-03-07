const form = document.querySelector('form');
const phoneInput = document.querySelector('#phone');
const emailInput = document.querySelector('#email');
const submitButton = document.querySelector('input[type="submit"]');
let businessManagerInput = document.querySelector('#business-manager');

// Set the initial selected value of the business manager input
if (localStorage.getItem('lastSelectedBusinessManager')) {
  businessManagerInput.value = localStorage.getItem('lastSelectedBusinessManager');
}

const validatePhone = () => {
  const phoneRegex = /^\+[0-9]+$/;
  const isValid = phoneRegex.test(phoneInput.value);
  const errorMessage = document.querySelector('#phone-error-message');

  if (!isValid) {
    phoneInput.classList.add('invalid');
    errorMessage.textContent = 'Please enter a valid phone number starting with a "+"';
  } else {
    phoneInput.classList.remove('invalid');
    errorMessage.textContent = '';
  }
};

const validateEmail = () => {
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  const isValid = emailRegex.test(emailInput.value);
  const errorMessage = document.querySelector('#email-error-message');

  if (!isValid) {
    emailInput.classList.add('invalid');
    errorMessage.textContent = 'Please enter a valid email address';
  } else {
    emailInput.classList.remove('invalid');
    errorMessage.textContent = '';
  }
};

const validateForm = () => {
  const phoneRegex = /^\+[0-9]+$/;
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  const isPhoneValid = phoneRegex.test(phoneInput.value);
  const isEmailValid = emailRegex.test(emailInput.value);

  if (!isPhoneValid || !isEmailValid) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
};

phoneInput.addEventListener('blur', validatePhone);
emailInput.addEventListener('blur', validateEmail);
form.addEventListener('input', validateForm);

businessManagerInput.addEventListener('change', () => {
  localStorage.setItem('lastSelectedBusinessManager', businessManagerInput.value);
});
