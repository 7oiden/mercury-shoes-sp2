import { getExistingBasket } from "../../utils/storage.js";

export function basketCounter() {
  const counterNumber = document.querySelector("#counter-number");
  const counterContainer = document.querySelector("#counter-container");

  const basket = getExistingBasket();

  counterNumber.innerHTML = "";
  counterContainer.style.display = "none";

  if (basket.length > 0) {
    let counter = 0;

    for (let i = 0; i < basket.length; i++) {
      counter += Number(basket[i].quantity);
    }
    counterContainer.style.display = "block";
    counterNumber.innerHTML = counter;
  }
}
