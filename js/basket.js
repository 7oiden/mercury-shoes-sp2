import createNavLinks from "./components/common/createNavLinks.js";
import { basketCounter } from "./components/common/basketCounter.js";
import { mobileToggler, adminToggler } from "./components/dropdownTogglers.js";
import adminLogin from "./components/common/adminLogin.js";
import { renderBasket, renderSummary } from "./ui/renderBasket.js";
import { clearBasket } from "./components/basket/clearBasket.js";

createNavLinks();
basketCounter();
adminToggler();
adminLogin();
renderBasket();
renderSummary();
clearBasket();
