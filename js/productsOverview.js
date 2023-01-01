import { productsUrl } from "./settings/api.js";
import createNavLinks from "./ui/createNavLinks.js";
import { basketCounter } from "./components/common/basketCounter.js";
import { mobileMenuToggler } from "./components/togglers/mobileMenuToggler.js";
import { loginModal } from "./components/modals/loginModal.js";
import displayAlert from "./components/alerts/displayAlert.js";
import adminLoginForm from "./components/forms/adminLoginForm.js";
import { renderProducts } from "./ui/renderProducts.js";
import { filterToggler } from "./components/togglers/filterToggler.js";
import renderBanner from "./ui/renderBanner.js";
import { searchProducts } from "./components/forms/searchProducts.js";
import { sortProducts } from "./components/forms/sortProducts.js";
import { filterProducts } from "./components/forms/filterProducts.js";

renderBanner();
createNavLinks();
basketCounter();
loginModal();
adminLoginForm();
mobileMenuToggler();
filterToggler();

(async function fetchApi() {
  try {
    const response = await fetch(productsUrl);
    const json = await response.json();

    // console.log(json)
    renderProducts(json);
    searchProducts(json);
    sortProducts(json);
    filterProducts(json);
    
  } catch (error) {
    console.log(error);
    displayAlert(
      "error absolute-pos",
      "An error has occurred when trying to fetch the API",
      ".products__grid"
    );
  }
})();
