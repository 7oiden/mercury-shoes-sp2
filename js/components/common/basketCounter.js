import { getExistingBasket } from "../../utils/storage.js";

export function basketCounter() {
  const counterContainer = document.querySelector("#test");
  const counterWrapper = document.querySelector("#counter");

  counterContainer.innerHTML = "";

  const basket = getExistingBasket();

  console.log(basket);

  if (basket.length > 0) {
    counterContainer.innerHTML = basket.length;
  } else {
    counterWrapper.style.display = "none";
  }
}
