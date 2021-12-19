import { productsUrl } from "./settings/api.js";
import createNavLinks from "./components/common/createNavLinks.js";
import { basketCounter } from "./components/common/basketCounter.js";
import { mobileToggler, adminToggler } from "./components/dropdownTogglers.js";
import displayAlert from "./components/common/displayAlert.js";
import adminLogin from "./components/common/adminLogin.js";
import { renderProducts } from "./ui/renderProducts.js";
import { searchProducts } from "./ui/searchProducts.js";
import { validateNewsletterForm } from "./components/formValidation/validateNewsletterForm.js";

createNavLinks();
basketCounter();
adminToggler();
adminLogin();

(async function fetchApi() {
  try {
    const response = await fetch(productsUrl);
    const json = await response.json();

    // console.log(json);
    renderProducts(json);
    searchProducts(json);
  } catch (error) {
    displayAlert(
      "alert error",
      "An error has occured when trying to fetch the API",
      ".products__grid"
    );
  }
})();
