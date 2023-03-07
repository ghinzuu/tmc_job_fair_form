// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
  console.log("dom loaded")
  // Get the form and submit button elements
  const form = document.querySelector("form");
  const submitButton = document.querySelector("input[type='submit']");

  // Get the input field elements
  const phoneInput = document.querySelector("#phone");
  const emailInput = document.querySelector("#email");

  // Get the business manager select element
  const businessManagerSelect = document.querySelector("#business-manager");

  // Store the last selected business manager in local storage
  if (businessManagerSelect.value) {
    localStorage.setItem("lastBusinessManager", businessManagerSelect.value);
  }

  // Set the last selected business manager as the selected option
  const lastBusinessManager = localStorage.getItem("lastBusinessManager");
  if (lastBusinessManager) {
    businessManagerSelect.value = lastBusinessManager;
  }

  // Disable the submit button by default
  submitButton.disabled = true;

  // Add an event listener to the form for input validation
  form.addEventListener("input", function() {

    // Reset the error messages
    phoneInput.setCustomValidity("");
    emailInput.setCustomValidity("");

    // Validate the phone number
    const phoneRegex = /^\+[0-9]+$/;
    if (!phoneRegex.test(phoneInput.value)) {
      phoneInput.setCustomValidity("Please enter a valid phone number starting with a '+'");
      console.log("phone not valid")
    }

    // Validate the email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      emailInput.setCustomValidity("Please enter a valid email address in the format 'name@domain.com'");
      console.log("email not valid")
    }

    // Enable the submit button if all input fields are valid
    if (form.checkValidity()) {
      submitButton.disabled = false;
      console.log("form valid")
    } else {
      submitButton.disabled = true;

    }

  });

});
