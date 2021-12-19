import createNavLinks from "./components/common/createNavLinks.js";
import { basketCounter } from "./components/common/basketCounter.js";
import { mobileToggler, adminToggler } from "./components/dropdownTogglers.js";
import adminLogin from "./components/common/adminLogin.js";
import faqToggler from "./components/about/faqToggler.js";
import { validateNewsletterForm } from "./components/formValidation/validateNewsletterForm.js";

createNavLinks();
basketCounter();
adminToggler();
adminLogin();
faqToggler();
