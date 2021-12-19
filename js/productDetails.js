import { baseUrl } from "./settings/api.js";
import createNavLinks from "./components/common/createNavLinks.js";
import { basketCounter } from "./components/common/basketCounter.js";
import { mobileToggler, adminToggler } from "./components/dropdownTogglers.js";
import displayAlert from "./components/common/displayAlert.js";
import adminLogin from "./components/common/adminLogin.js";
import renderDetails from "./ui/renderDetails.js";
import { validateNewsletterForm } from "./components/formValidation/validateNewsletterForm.js";

createNavLinks();
basketCounter();
adminToggler();
adminLogin();

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

    // console.log(json);

    document.title = `Mercury Shoes | ${json.title}`;

    renderDetails(json);
  } catch (error) {
    displayAlert("alert error", error, ".details__container");
  }
})();
