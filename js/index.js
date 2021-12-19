import { mobileToggler, adminToggler} from "./components/dropdownTogglers.js";
import adminLogin from "./components/common/adminLogin.js";
import { validateNewsletterForm } from "./components/formValidation/validateNewsletterForm.js";
import { productsUrl, heroUrl } from "./settings/api.js";
import displayAlert from "./components/common/displayAlert.js";
import { renderFeaturedProducts } from "./ui/renderFeaturedProducts.js";
import createNavLinks from "./components/common/createNavLinks.js";
import { basketCounter } from "./components/common/basketCounter.js";
import { renderHero } from "./ui/renderHero.js";

createNavLinks();
basketCounter();
adminToggler();
adminLogin();

(async function fetchApi() {
  try {
    const response = await fetch(heroUrl);
    const result = await response.json();

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

    // console.log(json);

    renderFeaturedProducts(json);
  } catch (error) {
    displayAlert(
      "alert error",
      "An error has occured when trying to fetch the API",
      ".featured__grid"
    );
  }
})();

const adminLoginIcon = document.querySelector("#login");
const adminDropdown = document.querySelector(".admin__dropdown");

// function openAdminDropdown() {
//   if (adminDropdown.style.display === "block") {
//     adminDropdown.style.display = "none";
//   } else {
//     adminDropdown.style.display = "block";
//     adminDropdown.style.zIndex = "9999";
//   }
// }

// adminLoginIcon.addEventListener("click", openAdminDropdown);

// document.addEventListener("click", function (event) {
//   const isClickInsideDropdown = adminDropdown.contains(event.target);

//   if (!isClickInsideDropdown && !event.target.matches("#login")) {
//     adminDropdown.style.display = "none";
//   }
// });
