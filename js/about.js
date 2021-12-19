import { mobileToggler, adminToggler } from "./components/dropdownTogglers.js";
import { validateNewsletterForm } from "./components/formValidation/validateNewsletterForm.js";
import adminLogin from "./components/common/adminLogin.js";
import createNavLinks from "./components/common/createNavLinks.js";
import { basketCounter } from "./components/common/basketCounter.js";
import faqToggler from "./components/about/faqToggler.js"

createNavLinks();
basketCounter();
adminToggler();
adminLogin();
faqToggler();



