import { mobileToggler } from "./components/dropdownTogglers.js";
import { adminToggler } from "./components/dropdownTogglers.js";
import adminLogin from "./components/common/adminLogin.js";
import { validateNewsletterForm } from "./components/validateNewsletterForm.js";
import { productsUrl, heroUrl } from "./settings/api.js";
import displayAlert from "./components/common/displayAlert.js";
import { renderFeaturedProducts } from "./ui/renderFeaturedProducts.js";
import createAdminNav from "./components/common/createAdminNav.js";
import { basketCounter } from "./components/common/basketCounter.js";
import { renderHero } from "./ui/renderHero.js";


basketCounter();
createAdminNav();
adminLogin();

(async function fetchApi() {
  try {
    const response = await fetch(heroUrl);
    const result = await response.json();

    // console.log(result);
    renderHero(result);
  } catch (error) {
    displayAlert(
      "alert error",
      "An error has occured when trying to fetch the API",
      ".featured__grid"
    );
  }
})();

(async function fetchApi() {
  try {
    const response = await fetch(productsUrl);
    const json = await response.json();

    console.log(json);

    renderFeaturedProducts(json);
  } catch (error) {
    displayAlert(
      "alert error",
      "An error has occured when trying to fetch the API",
      ".featured__grid"
    );
  }
})();





