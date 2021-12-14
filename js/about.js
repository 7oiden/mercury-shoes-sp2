import { mobileToggler } from "./components/dropdownTogglers.js";
import { adminToggler } from "./components/dropdownTogglers.js";
import { validateNewsletterForm } from "./components/validateNewsletterForm.js";
import adminLogin from "./components/common/adminLogin.js";
import createAdminNav from "./components/common/createAdminNav.js";
import { basketCounter } from "./components/common/basketCounter.js";
import faqToggler from "./components/about/faqToggler.js"

createAdminNav();
basketCounter();
adminLogin();

faqToggler();



