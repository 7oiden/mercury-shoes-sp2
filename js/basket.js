import { mobileToggler } from "./components/dropdownTogglers.js";
import { adminToggler } from "./components/dropdownTogglers.js";
import createAdminNav from "./components/common/createAdminNav.js";
import { clearBasket } from "./components/basket/clearBasket.js";
import { basketCounter } from "./components/common/basketCounter.js";
import { getExistingBasket, saveBasket } from "./utils/storage.js";
import { renderBasket } from "./ui/renderBasket.js";

basketCounter();
createAdminNav();

const basket = getExistingBasket();

const basketContainer = document.querySelector(".basket__list");
const summaryContainer = document.querySelector(".summary");

const clearButton = document.querySelector("#clear-basket");
const basketHeading = document.querySelector(".basket__heading-container");

let itemCount = basket.length;

// console.log(basket.length);

basketHeading.innerHTML = `
<h1 class="basket__heading">Basket</h1>
`;

if (itemCount === 0) {
  basketContainer.innerHTML = `<li class="basket-list-empty">Your basket is empty...</li>`;
  clearButton.style.display = "none";
}

renderBasket(basket);

///removes item form basket
const removeIcon = document.querySelectorAll(".remove-icon");

removeIcon.forEach((icons) => {
  icons.addEventListener("click", handleClick);
});

function handleClick() {
  const currentBasket = getExistingBasket();
  const id = this.dataset.id;

  console.log(id);

  console.log(currentBasket);

  const newBasket = currentBasket.filter((item) => {
    // console.log(item);
    return item.id !== id;
  });

  console.log(newBasket);
  saveBasket(newBasket);
  basketCounter();
  location.reload();
}



// quantity
// const quantity = document.querySelectorAll(".quantity");

// quantity.forEach((element) => {

//   let newQuantity = element.value;

//   console.log(newQuantity);

//   element.addEventListener("input", (event) => {
//     newQuantity = event.target.value;

//     console.log(newQuantity);
//   });

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
                    <td class="align-right" id="test">$${subTotal}</td>
                  </tr>
                  <tr id="shipping">
                    <th scope="row" >Shipping:</th>
                    <td class="align-right">$${shipping}</td>
                  </tr>
                  <tr id="order-total">
                    <th scope="row">Order total:</th>
                    <td class="align-right">$${orderTotal}</td>
                  </tr>
                </table>
                <div>
                  <a href="index.html" class="button primary-button checkout-button"
                    >Checkout</a
                  >
                </div>`;

clearBasket();
