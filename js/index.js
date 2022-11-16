import { productsUrl, heroUrl } from "./settings/api.js";
import createNavLinks from "./components/common/createNavLinks.js";
import { basketCounter } from "./components/common/basketCounter.js";
import { mobileToggler, adminToggler } from "./components/common/dropdownTogglers.js";
import displayAlert from "./components/common/displayAlert.js";
import adminLogin from "./components/common/adminLogin.js";
import { renderHero } from "./ui/renderHero.js";
import { renderFeaturedProducts } from "./ui/renderFeaturedProducts.js";
import newsletterModal from "./components/common/newsletterModal.js";
import { validateNewsletterForm } from "./components/formValidation/validateNewsletterForm.js";

createNavLinks();
basketCounter();
adminToggler();
adminLogin();
newsletterModal();

(async function fetchApi() {
  try {
    const response = await fetch(heroUrl);
    const result = await response.json();

    console.log(result);

    renderHero(result);
  } catch (error) {
    displayAlert(
      "alert warning",
      "Background image could not be fetched, please try to reload page in a while",
      ".image-alert"
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
      "alert error",
      "An error has occured when trying to fetch the API",
      ".featured__grid"
    );
  }
})();