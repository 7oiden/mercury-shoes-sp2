import { getExistingBasket } from "../utils/storage.js";
import { renderBasket } from "./renderBasket.js";

// const basket = getExistingBasket();

export default function renderSummary(currentBasket) {
  const summaryContainer = document.querySelector(".summary");

  let subTotal = 0;
  let shipping = 10;
  let orderTotal = 0;

  for (let i = 0; i < currentBasket.length; i++) {
    subTotal += Number(currentBasket[i].price * currentBasket[i].quantity);
  }

  let shippingMessage = `Get free shipping over 50$`;

  if (subTotal > 50 || subTotal === 0) {
    shipping = 0;
    shippingMessage = "";
  }

  orderTotal = subTotal + shipping;

  summaryContainer.innerHTML = `
  <h2 class="summary__heading">Order summary</h2>
  <span>${shippingMessage}</span>
                <table class="summary__table">
                  <tr>
                    <th scope="row">Sub total:</th>
                    <td class="summary__table-data">$${subTotal}</td>
                  </tr>
                  <tr id="shipping">
                    <th scope="row">Shipping</th>
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
}
