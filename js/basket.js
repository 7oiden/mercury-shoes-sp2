import { mobileToggler } from "./components/dropdownTogglers.js";
import { adminToggler } from "./components/dropdownTogglers.js";
import adminLogin from "./components/common/adminLogin.js";
import createAdminNav from "./components/common/createAdminNav.js";
import { clearBasket } from "./components/basket/clearBasket.js";
import { basketCounter } from "./components/common/basketCounter.js";
import { getExistingBasket } from "./utils/storage.js";
import { renderBasket, renderSummary} from "./ui/renderBasket.js";


basketCounter();
createAdminNav();
adminLogin();

const basket = getExistingBasket();

renderBasket();
clearBasket();
renderSummary();


console.log(basket);





