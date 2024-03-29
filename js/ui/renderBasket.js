import { getExistingBasket, saveBasket } from "../utils/storage.js";
import { basketCounter } from "../components/common/basketCounter.js";

const basketContainer = document.querySelector(".basket__list");
const clearButton = document.querySelector("#clear-basket");
const summaryContainer = document.querySelector(".summary");

let currentBasket = getExistingBasket();

renderBasket(currentBasket);

export function renderBasket() {
  basketContainer.innerHTML = "";

  const itemCount = currentBasket.length;

  if (itemCount === 0) {
    basketContainer.innerHTML = `<li class="basket__list--empty">Your basket is empty...</li>`;
    clearButton.style.display = "none";
  }

  currentBasket.forEach((item) => {
    const total = item.price * item.quantity;

    basketContainer.innerHTML += `
    <li class="basket__item">
      <a href="products-details.html?id=${item.id}" class="basket__image">
        <img
        src="${item.image_url}"
        alt="${item.image_alt}"
        class="basket__image"
        /a>
      </div>
      <div class="basket__content">
        <h2 class="basket__title">
          <a href="products-details.html?id=${item.id}" class="basket__link">${item.title}</a>
        </h2>
        <table class="basket__table">
          <tr class="basket__row">
            <th scope="row" class="basket__table-heading">Gender:</th>
              <td>Unisex</td>
          </tr>
          <tr class="basket__row">
            <th scope="row" class="basket__table-heading">Color:</th>
              <td>${item.color}</td>
          </tr>
          <tr class="basket__row">
            <th scope="row" class="basket__table-heading">Size:</th>
              <td>${item.size}</td>
          </tr>
          <tr class="basket__row">
            <th scope="row" class="basket__table-heading">Price:</th>
              <td>$${item.price}</td>
          </tr>
          <tr class="basket__row">
            <th scope="row" class="basket__table-heading">Quantity:</th>
              <td>${item.quantity}</td>
          </tr>
          <tr id="total">
            <th scope="row" class="basket__table-heading">Total:</th>
              <td>$${total}</td>
          </tr>
        </table>
      </div>
      <svg style="width:1.5rem;height:1.5rem" viewBox="0 0 24 24" class="basket__remove-icon" data-id="${item.id}">
      <title>Remove item</title>
      <path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
      </svg>
      </li>`;
  });

  const removeIcon = document.querySelectorAll(".basket__remove-icon");

  removeIcon.forEach((icons) => {
    icons.addEventListener("click", handleClick);
  });
}

export function renderSummary() {
  let subTotal = 0;
  let shipping = 10;
  let orderTotal = 0;

  let shippingMessage = `* get free shipping over 50$`;

  for (let i = 0; i < currentBasket.length; i++) {
    subTotal += Number(currentBasket[i].price * currentBasket[i].quantity);
  }

  if (subTotal > 50 || subTotal === 0) {
    shippingMessage = "";
    shipping = 0;
  }

  orderTotal = subTotal + shipping;

  summaryContainer.innerHTML = `
  <h3 class="summary__heading">Order summary</h3>
  <span class="summary__message">${shippingMessage}</span>
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
  <div class="summary-btn-container">
  <a href="products-overview.html" class="button primary-button"
    >Shop more</a>
    <a href="confirmation.html" class="button primary-button checkout-button"
    >Checkout</a>
  </div>`;

  const checkoutButton = document.querySelector(".checkout-button");

  if (orderTotal === 0) {
    checkoutButton.classList.add("disabled");
  }
}

function handleClick() {
  const id = this.dataset.id;

  const newBasket = currentBasket.filter((item) => {
    if (item.id !== id) {
      return true;
    }
  });

  currentBasket = newBasket;

  saveBasket(newBasket);
  renderBasket();
  renderSummary();
  basketCounter();
}
