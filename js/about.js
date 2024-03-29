import createNavLinks from "./ui/createNavLinks.js";
import { basketCounter } from "./components/common/basketCounter.js";
import { mobileMenuToggler } from "./components/togglers/mobileMenuToggler.js";
import { loginModal } from "./components/modals/loginModal.js";
import adminLogin from "./components/forms/adminLoginForm.js";
import faqToggler from "./components/togglers/faqToggler.js";
import renderBanner from "./ui/renderBanner.js";

renderBanner();
createNavLinks();
basketCounter();
loginModal();
adminLogin();
faqToggler();
mobileMenuToggler();
