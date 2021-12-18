import { mobileToggler, adminToggler } from "./components/dropdownTogglers.js";
import { validateNewsletterForm } from "./components/formValidation/validateNewsletterForm.js";
import adminLogin from "./components/common/adminLogin.js";
import createAdminNav from "./components/common/createAdminNav.js";
import { basketCounter } from "./components/common/basketCounter.js";
import faqToggler from "./components/about/faqToggler.js"

createAdminNav();
basketCounter();
adminToggler();
adminLogin();

faqToggler();



