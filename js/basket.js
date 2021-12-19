import { mobileToggler, adminToggler } from "./components/dropdownTogglers.js";
import adminLogin from "./components/common/adminLogin.js";
import createNavLinks from "./components/common/createNavLinks.js";
import { clearBasket } from "./components/basket/clearBasket.js";
import { basketCounter } from "./components/common/basketCounter.js";
import { renderBasket, renderSummary} from "./ui/renderBasket.js";


createNavLinks();
basketCounter();
adminToggler();
adminLogin();
renderBasket();
renderSummary();
clearBasket();


