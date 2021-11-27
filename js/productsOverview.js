import { productsUrl } from "./settings/api.js";
import displayAlert from "./components/common/displayAlert.js";
import { renderProducts } from "./ui/renderProducts.js";
import { searchProducts } from "./ui/searchProducts.js";

(async function fetchApi() {
  try {
    const response = await fetch(productsUrl);
    const json = await response.json();

    console.log(json);

    renderProducts(json);
    searchProducts(json);
  } catch (error) {
    displayAlert(
      "alert error",
      "An error has occured when trying to fetch the API",
      ".featured__grid"
    );
  }
})();
