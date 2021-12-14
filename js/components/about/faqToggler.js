const faqIcon1 = document.querySelector(".faq__icon1");
const faqIcon2 = document.querySelector(".faq__icon2");
const faqIcon3 = document.querySelector(".faq__icon3");
const faqIcon4 = document.querySelector(".faq__icon4");
const faqIcon5 = document.querySelector(".faq__icon5");
const faqAnswer1 = document.querySelector("#a1");
const faqAnswer2 = document.querySelector("#a2");
const faqAnswer3 = document.querySelector("#a3");
const faqAnswer4 = document.querySelector("#a4");
const faqAnswer5 = document.querySelector("#a5");

export default function faqToggler() {
  faqIcon1.onclick = function () {
    faqIcon1.classList.toggle("fa-plus-square");
    faqIcon1.classList.toggle("fa-minus-square");
    faqAnswer1.classList.toggle("faq__answer");
    faqAnswer1.classList.toggle("faq__answer--display");
  };

  faqIcon2.onclick = function () {
    faqIcon2.classList.toggle("fa-plus-square");
    faqIcon2.classList.toggle("fa-minus-square");
    faqAnswer2.classList.toggle("faq__answer");
    faqAnswer2.classList.toggle("faq__answer--display");
  };

  faqIcon3.onclick = function () {
    faqIcon3.classList.toggle("fa-plus-square");
    faqIcon3.classList.toggle("fa-minus-square");
    faqAnswer3.classList.toggle("faq__answer");
    faqAnswer3.classList.toggle("faq__answer--display");
  };

  faqIcon4.onclick = function () {
    faqIcon4.classList.toggle("fa-plus-square");
    faqIcon4.classList.toggle("fa-minus-square");
    faqAnswer4.classList.toggle("faq__answer");
    faqAnswer4.classList.toggle("faq__answer--display");
  };

  faqIcon5.onclick = function () {
    faqIcon5.classList.toggle("fa-plus-square");
    faqIcon5.classList.toggle("fa-minus-square");
    faqAnswer5.classList.toggle("faq__answer");
    faqAnswer5.classList.toggle("faq__answer--display");
  };
}
