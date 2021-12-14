import { mobileToggler } from "./components/dropdownTogglers.js";
import { adminToggler } from "./components/dropdownTogglers.js";
import adminLogin from "./components/common/adminLogin.js";
import { validateNewsletterForm } from "./components/validateNewsletterForm.js";
import { productsUrl } from "./settings/api.js";
import displayAlert from "./components/common/displayAlert.js";
import { renderProducts } from "./ui/renderProducts.js";
import { searchProducts } from "./ui/searchProducts.js";
import createAdminNav from "./components/common/createAdminNav.js";
import { basketCounter } from "./components/common/basketCounter.js";

basketCounter();
createAdminNav();
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
