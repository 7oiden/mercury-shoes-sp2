import { mobileToggler } from "./components/dropdownTogglers.js";
import { adminToggler } from "./components/dropdownTogglers.js";
import adminLogin from "./components/common/adminLogin.js";
import createAdminNav from "./components/common/createAdminNav.js";
import { clearBasket } from "./components/basket/clearBasket.js";
import { basketCounter } from "./components/common/basketCounter.js";
import { getExistingBasket } from "./utils/storage.js";
import { renderBasket } from "./ui/renderBasket.js";


basketCounter();
createAdminNav();
adminLogin();

const basket = getExistingBasket();

renderBasket(basket);

const summaryContainer = document.querySelector(".summary");

let subTotal = 0;

for (let i = 0; i < basket.length; i++) {
  subTotal += Number(basket[i].price * basket[i].quantity);
}

let orderTotal = 0;
let shipping = 10;

if (subTotal >= 50 || subTotal === 0) {
  shipping = 0;
}

orderTotal = subTotal + shipping;

summaryContainer.innerHTML = `
  <h2 class="summary__heading">Order summary</h2>
                <table class="summary__table">
                  <tr>
                    <th scope="row">Sub total:</th>
                    <td class="summary__table-data">$${subTotal}</td>
                  </tr>
                  <tr id="shipping">
                    <th scope="row" >Shipping:</th>
                    <td class="summary__table-data">$${shipping}</td>
                  </tr>
                  <tr id="order-total">
                    <th scope="row">Order total:</th>
                    <td class="summary__table-data">$${orderTotal}</td>
                  </tr>
                </table>
                <div>
                  <a href="index.html" class="button primary-button checkout-button"
                    >Checkout</a
                  >
                </div>`;

clearBasket();
