import { mobileToggler } from "./components/dropdownTogglers.js";
import { adminToggler } from "./components/dropdownTogglers.js";
import createAdminNav from "./components/common/createAdminNav.js";
import clearBasket from "./components/basket/clearBasket.js";

import { getExistingBasket } from "./utils/storage.js";

createAdminNav();

const basket = getExistingBasket();

const basketContainer = document.querySelector(".basket__list");

const clearButton = document.querySelector("#clear-basket");
const basketHeading = document.querySelector(".basket__heading-container");

let itemCount = basket.length;

console.log(basket.length);

let word = "item";

if (itemCount > 1) {
  word = "items"
}

basketHeading.innerHTML = `
<h1 class="basket__heading">Basket <span id="item-count">(${itemCount} ${word})</span></h1>
`;

if (itemCount === 0) {
  basketContainer.innerHTML = `<li class="basket-list-empty">Basket is empty...</li>`;
  clearButton.style.display = "none";
  basketHeading.innerHTML = `<h1 class="basket__heading">Basket</h1>`;
}

console.log(basket);

basket.forEach((item) => {
  basketContainer.innerHTML += `
      <li class="basket__item">
                  <div class="basket__image">
                    <img
                      src="${item.image}"
                      alt=""
                      class="basket__image"
                    />
                  </div>
                  <div class="basket__content">
                    <h3 class="basket__title">
                      <a class="basket__link">${item.title}</a>
                    </h3>
                    <table class="basket__table">
                      <tr>
                        <th scope="row">Color:</th>
                        <td>green</td>
                      </tr>
                      <tr>
                        <th scope="row">Size:</th>
                        <td>42</td>
                      </tr>
                      <tr>
                        <th scope="row">Quantity:</th>
                        <td>1</td>
                      </tr>
                      <tr>
                        <th scope="row">Price:</th>
                        <td>$${item.price}</td>
                      </tr>
                    </table>
                  </div>

                  <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z"
                    />
                  </svg>
                </li>`;
});

clearBasket();
