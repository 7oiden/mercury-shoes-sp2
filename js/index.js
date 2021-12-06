import { mobileToggler } from "./components/dropdownTogglers.js";
import { adminToggler } from "./components/dropdownTogglers.js";
import { validateNewsletterForm } from "./components/newsletter.js";
import { productsUrl, homeUrl } from "./settings/api.js";
import displayAlert from "./components/common/displayAlert.js";
import { renderFeaturedProducts } from "./ui/renderFeaturedProducts.js";
import createAdminNav from "./components/common/createAdminNav.js";
import { basketCounter } from "./components/common/basketCounter.js";

basketCounter();

createAdminNav();

(async function fetch() {
  try {
    const response = await fetch(homeUrl);
    const result = await response.json();

    console.log(result);
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

    console.log(json[0].image.alternativeText);

    renderFeaturedProducts(json);
  } catch (error) {
    displayAlert(
      "alert error",
      "An error has occured when trying to fetch the API",
      ".featured__grid"
    );
  }
})();
