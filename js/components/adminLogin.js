// const adminForm = document.querySelector(".admin__from");
// const usernameInput = document.querySelector("#username");
// const passwordInput = document.querySelector("#password");
// const emailError = document.querySelector("#admin-email-error");
// const passwordError = document.querySelector("#admin-password-error");

// const loginSuccess = document.querySelector(".successful-login");
// const inputBox = document.querySelector(".input-box");
// const loginContainer = document.querySelector(".form-wrapper");
// const signOut = document.querySelector("#sign-out");
// const profileContainer = document.querySelector(".profile");



// export default function validateLogin(event) {
//   event.preventDefault();

//   console.log("hi");

//   if (checkLength(password.value, 6) === true) {
//     passwordError.style.display = "none";
//     password.style.backgroundColor = "#f5f5f5";
//     password.style.borderColor = "#172940bf";
//   } else {
//     passwordError.style.display = "block";
//     password.style.backgroundColor = "#D9210040";
//     password.style.borderColor = "red";
//   }

//   if (validateEmail(email.value) === true) {
//     emailError.style.display = "none";
//     email.style.backgroundColor = "#f5f5f5";
//     email.style.borderColor = "#172940bf";
//   } else {
//     emailError.style.display = "block";
//     email.style.backgroundColor = "#D9210040";
//     email.style.borderColor = "red";
//   }
//   if (
//     validateEmail(email.value) === true &&
//     passwordError.style.display === "block"
//   ) {
//     email.style.backgroundColor = "#D9210040";
//     email.style.borderColor = "red";
//   }
//   if (
//     validateEmail(email.value) === true &&
//     checkLength(password.value, 7) === true
//   ) {
//     loginSuccess.style.display = "block";
//     loginContainer.style.display = "none";
//     profileContainer.style.height = "350px";
//   } else {
//     loginSuccess.style.display = "none";
//   }
// }

// adminForm.addEventListener("submit", validateLogin);

// function checkLength(value, len) {
//   if (value.trim().length > len) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function validateEmail(email) {
//   const regEx = /\S+@\S+\.\S+/;
//   const patternMatches = regEx.test(email);
//   return patternMatches;
// }

// function checkInput() {
//   if (checkLength(email.value, 0) && email.style.borderColor === "red") {
//     emailError.style.display = "none";
//     email.style.backgroundColor = "#fff";
//     email.style.borderColor = "#172940";
//   }
//   if (
//     checkLength(password.value, 0) &&
//     passwordError.style.display === "block"
//   ) {
//     passwordError.style.display = "none";
//     password.style.backgroundColor = "#fff";
//     password.style.borderColor = "#172940";
//   }
// }

// email.addEventListener("keyup", checkInput);
// password.addEventListener("keyup", checkInput);

// function logout() {
//   console.log("hi");
//   if (loginSuccess.style.display === "block") {
//     loginSuccess.style.display = "none";
//     loginContainer.style.display = "block";
//     profileContainer.style.height = "550px";
//   }
// }

// signOut.addEventListener("click", logout);
