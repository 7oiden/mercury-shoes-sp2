import createNavLinks from "./ui/createNavLinks.js";
import { basketCounter } from "./components/common/basketCounter.js";
import { mobileMenuToggler } from "./components/togglers/mobileMenuToggler.js";
import { loginModal } from "./components/modals/loginModal.js";
import adminLoginForm from "./components/forms/adminLoginForm.js";
import { renderBasket, renderSummary } from "./ui/renderBasket.js";
import { clearBasketButton } from "./components/buttons/clearBasketButton.js";
import renderBanner from "./ui/renderBanner.js";

renderBanner();
createNavLinks();
basketCounter();
loginModal();
adminLoginForm();
renderBasket();
renderSummary();
clearBasketButton();
mobileMenuToggler();
