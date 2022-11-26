import { productsUrl } from "./settings/api.js";
import createNavLinks from "./ui/createNavLinks.js";
import { basketCounter } from "./components/common/basketCounter.js";
import { mobileMenuToggler } from "./components/togglers/mobileMenuToggler.js";
import { loginModal } from "./components/modals/loginModal.js";
import displayAlert from "./components/alerts/displayAlert.js";
import adminLoginForm from "./components/forms/adminLoginForm.js";
import { renderProducts } from "./ui/renderProducts.js";
import { searchProducts } from "./ui/searchProducts.js";
import { filterProducts } from "./ui/filterProducts.js";
// import { validateNewsletterForm } from "./components/formValidation/validateNewsletterForm.js";

createNavLinks();
basketCounter();
loginModal();
adminLoginForm();
mobileMenuToggler();

(async function fetchApi() {
  try {
    const response = await fetch(productsUrl);
    const json = await response.json();

    renderProducts(json);
    searchProducts(json);
    filterProducts(json);
  } catch (error) {
    displayAlert(
      "alert error",
      "An error has occurred when trying to fetch the API",
      ".products__grid"
    );
  }
})();
