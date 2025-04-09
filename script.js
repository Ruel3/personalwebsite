// js/script.js

document.addEventListener('DOMContentLoaded', function() {
    const greetingElement = document.getElementById('greeting');
    const now = new Date();
    const hour = now.getHours();
    let greeting;
  
    if (hour < 12) {
      greeting = "Good morning!";
    } else if (hour < 18) {
      greeting = "Good afternoon!";
    } else {
      greeting = "Good evening!";
    }
  
    if (greetingElement) {
      greetingElement.textContent = greeting;
    }
  });
  // script.js
  // Function to handle form validation
function validateForm(event) {
    event.preventDefault(); // Prevent form from submitting if validation fails

    let isValid = true;

    // Validate Name
    let fullName = document.getElementById('name').value;
    let nameError = document.getElementById('nameError');
    let nameErrorIcon = document.getElementById('nameErrorIcon');
    if (!fullName) {
        nameError.textContent = "Name is required.";
        nameErrorIcon.textContent = "❌"; // You can use an icon
        nameError.classList.add('error');
        isValid = false;
    } else {
        nameError.textContent = "";
        nameErrorIcon.textContent = "";
        nameError.classList.remove('error');
    }

    // Validate Email
    let email = document.getElementById('email').value;
    let emailError = document.getElementById('emailError');
    let emailErrorIcon = document.getElementById('emailErrorIcon');
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email)) {
        emailError.textContent = "Valid email is required.";
        emailErrorIcon.textContent = "❌"; // Error icon
        emailError.classList.add('error');
        isValid = false;
    } else {
        emailError.textContent = "";
        emailErrorIcon.textContent = "";
        emailError.classList.remove('error');
    }

    // Validate Phone
    let phone = document.getElementById('phone').value;
    let phoneError = document.getElementById('phoneError');
    let phoneRegex = /^\d{10}$/; // Example: 10 digits
    if (phone && !phoneRegex.test(phone)) {
        phoneError.textContent = "Invalid phone number.";
        phoneError.classList.add('error');
        isValid = false;
    } else {
        phoneError.textContent = "";
        phoneError.classList.remove('error');
    }

    // Validate Password
    let password = document.getElementById('password').value;
    let passwordError = document.getElementById('passwordError');
    if (password && password.length < 6) { // Password must be at least 6 characters
        passwordError.textContent = "Password must be at least 6 characters.";
        passwordError.classList.add('error');
        isValid = false;
    } else {
        passwordError.textContent = "";
        passwordError.classList.remove('error');
    }

    // Validate Message
    let message = document.getElementById('message').value;
    let messageError = document.getElementById('messageError');
    if (!message) {
        messageError.textContent = "Message is required.";
        messageError.classList.add('error');
        isValid = false;
    } else {
        messageError.textContent = "";
        messageError.classList.remove('error');
    }

    // Show success message if all fields are valid
    if (isValid) {
        document.getElementById('successMessage').textContent = "Message sent successfully!";
    } else {
        document.getElementById('successMessage').textContent = "";
    }
}
