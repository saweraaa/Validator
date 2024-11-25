var form = document.getElementById('validatorForm');
var fullName = document.getElementById('fullName');
var email = document.getElementById('email');
var password = document.getElementById('password');
var errorMsgName = document.getElementById('errorMsgName');
var errorMsgEmail = document.getElementById('errorMsgEmail');
var errorMsgPassword = document.getElementById('errorMsgPassword');
// js file edited
// Ensure the error message elements are empty initially
errorMsgName.innerHTML = "";
errorMsgEmail.innerHTML = "";
errorMsgPassword.innerHTML = "";

var submit = document.getElementById('submitBtn');
submit.addEventListener('click', function (event) {
    event.preventDefault();

    // Reset all error messages
    errorMsgName.innerHTML = "";
    errorMsgEmail.innerHTML = "";
    errorMsgPassword.innerHTML = "";

    // Validation for full name
    // trim >>> spaces remove
    if (fullName.value.trim() === "") {
        errorMsgName.innerHTML = "Please Enter Your Full Name";
    }

    // Validation for email
    if (!email.value.includes("@") || !email.value.includes(".")) {
        errorMsgEmail.innerHTML = "Please Enter a Valid Email Address";
    }

    // Validation for password
    if (password.value.length < 6) {
        errorMsgPassword.innerHTML = "Password must be at least 6 characters long";
    }
});
