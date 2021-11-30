import { mobileToggler } from "./components/dropdownTogglers.js";
import { adminToggler } from "./components/dropdownTogglers.js";
import { validateNewsletterForm } from "./components/newsletter.js";
import { productsUrl } from "./settings/api.js";
import displayAlert from "./components/common/displayAlert.js";
import { renderFeaturedProducts } from "./ui/renderFeaturedProducts.js";
import createAdminNav from "./components/common/createAdminNav.js";


createAdminNav();



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

