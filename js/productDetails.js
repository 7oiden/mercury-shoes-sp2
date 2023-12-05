import { baseUrl } from "./settings/api.js";
import createNavLinks from "./ui/createNavLinks.js";
import { basketCounter } from "./components/common/basketCounter.js";
import { mobileMenuToggler } from "./components/togglers/mobileMenuToggler.js";
import { loginModal } from "./components/modals/loginModal.js";
import displayAlert from "./components/alerts/displayAlert.js";
import adminLogin from "./components/forms/adminLoginForm.js";
import renderDetails from "./ui/renderDetails.js";
import renderBanner from "./ui/renderBanner.js";

renderBanner();
createNavLinks();
basketCounter();
loginModal();
adminLogin();
mobileMenuToggler();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
  document.location.href = "/";
}

const detailUrl = baseUrl + "products/" + id;

(async function () {
  try {
    const response = await fetch(detailUrl);
    const json = await response.json();

    document.title = `Mercury Shoes | ${json.title}`;

    renderDetails(json);
  } catch (error) {
    console.log(error);
    displayAlert(
      "alert error",
      "An error has occurred when trying to fetch the API",
      ".details__container"
    );
  }
})();
