import createNavLinks from "./ui/createNavLinks.js";
import { basketCounter } from "./components/common/basketCounter.js";
import adminLoginForm from "./components/forms/adminLoginForm.js";
import { mobileMenuToggler } from "./components/togglers/mobileMenuToggler.js";
import { loginModal } from "./components/modals/loginModal.js";
import renderFavorites from "./ui/renderFavorites.js";
import { clearFavsButton } from "./components/buttons/clearFavsButton.js";
import renderBanner from "./ui/renderBanner.js";

renderBanner();
createNavLinks();
basketCounter();
renderFavorites();
clearFavsButton();
mobileMenuToggler();
loginModal();
adminLoginForm();
