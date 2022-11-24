import { productsUrl } from "./settings/api.js";
import createNavLinks from "./components/common/createNavLinks.js";
import { basketCounter } from "./components/common/basketCounter.js";
import {
  mobileToggler,
  adminToggler,
} from "./components/common/dropdownTogglers.js";
import displayAlert from "./components/common/displayAlert.js";
import adminLogin from "./components/common/adminLogin.js";
import { renderProducts } from "./ui/renderProducts.js";
import { searchProducts } from "./ui/searchProducts.js";
import { filterProducts } from "./ui/filterProducts.js";
// import { validateNewsletterForm } from "./components/formValidation/validateNewsletterForm.js";

createNavLinks();
basketCounter();
adminToggler();
adminLogin();
mobileToggler();

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
