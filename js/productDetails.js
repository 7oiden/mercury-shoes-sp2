import { baseUrl } from "./settings/api.js";
import displayAlert from "./components/common/displayAlert.js";
import { mobileToggler } from "./components/dropdownTogglers.js";
import { adminToggler } from "./components/dropdownTogglers.js";
import adminLogin from "./components/common/adminLogin.js";
import { validateNewsletterForm } from "./components/formValidation/validateNewsletterForm.js";
import createAdminNav from "./components/common/createAdminNav.js";
// import descriptionToggler from "./components/productDetails/descriptionToggler.js";
// import { getExistingBasket, saveBasket } from "./utils/storage.js";
import { basketCounter } from "./components/common/basketCounter.js";
// import { getToken } from "./utils/storage.js";
import renderDetails from "./ui/renderDetails.js";

// const token = getToken();

basketCounter();
createAdminNav();
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

    console.log(json);

    document.title = `Mercury Shoes | ${json.title}`;

    renderDetails(json);
  } catch (error) {
    displayAlert("alert error", error, ".details__container");
  }
})();
