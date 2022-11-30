import { validateEmail } from "../../utils/validators.js";

const newsletterForm = document.querySelector(".newsletter__form");
const newsletterEmailError = document.querySelector("#newsletter-email-error");
const newsletterSuccess = document.querySelector(".newsletter__success");
const newsletterInput = document.querySelector(".newsletter__input");

export function validateNewsletterForm(event) {
  event.preventDefault();

  if (validateEmail(newsletterInput.value)) {
    newsletterEmailError.style.display = "none";
  } else {
    newsletterEmailError.style.display = "block";
  }

  if (validateEmail(newsletterInput.value)) {
    newsletterSuccess.innerHTML = `
    <span>Thank you for subscribing!</span>`;

    newsletterForm.reset();

    setTimeout(function () {
      newsletterSuccess.innerHTML = "";
    }, 3000);
  }
}

newsletterInput.onfocus = function () {
  newsletterInput.style.border = "2px solid transparent";
};

newsletterForm.addEventListener("submit", validateNewsletterForm);

// function validateEmail(newsletterInput) {
//   const regEx = /\S+@\S+\.\S+/;
//   const patternMatches = regEx.test(newsletterInput);
//   return patternMatches;
// }
