import { productsUrl, heroUrl } from "./settings/api.js";
import createNavLinks from "./ui/createNavLinks.js";
import { basketCounter } from "./components/common/basketCounter.js";
import { mobileMenuToggler } from "./components/togglers/mobileMenuToggler.js";
import { loginModal } from "./components/modals/loginModal.js";
import displayAlert from "./components/alerts/displayAlert.js";
import adminLogin from "./components/forms/adminLoginForm.js";
import { renderHero } from "./ui/renderHero.js";
import { renderFeaturedProducts } from "./ui/renderFeaturedProducts.js";
import newsletterModal from "./components/modals/newsletterModal.js";
import apiAlert from "./components/alerts/apiAlert.js";
// import { validateNewsletterForm } from "./components/formValidation/validateNewsletterForm.js";

createNavLinks();
basketCounter();
adminLogin();
newsletterModal();
mobileMenuToggler();
loginModal();

// const alertContainer = document.querySelector(".api-alert-container");

(async function fetchApi() {
  try {
    const response = await fetch(heroUrl);
    const result = await response.json();

    // if (response.status === 200) {
    //   console.log(response.status);
    //   apiAlert();
    // }

    // console.log(response.status);

    // console.log(result);
    renderHero(result);
  } catch (error) {
    displayAlert(
      "error absolute-pos",
      "An error has occurred when trying to fetch the API",
      ".hero__container"
    );
  }
})();

(async function fetchApi() {
  try {
    const response = await fetch(productsUrl);
    const json = await response.json();

    renderFeaturedProducts(json);
  } catch (error) {
    displayAlert(
      "error absolute-pos",
      "An error has occurred when trying to fetch the API",
      ".slider__wrapper"
    );
  }
})();
