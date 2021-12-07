import { getExistingBasket } from "../../utils/storage.js";



export function basketCounter() {
  const counterContainer = document.querySelector("#test");
  const counterWrapper = document.querySelector("#counter");

  const basket = getExistingBasket();

  //  console.log(basket);

  counterContainer.innerHTML = "";

  if (basket.length > 0) {
    let counter = 0;

    for (let i = 0; i < basket.length; i++) {
      counter += Number(basket[i].quantity);
    }

    counterContainer.innerHTML = counter;
  } else {
    counterWrapper.style.display = "none";
  }
}
