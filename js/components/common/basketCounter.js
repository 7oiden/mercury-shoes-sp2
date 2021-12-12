import { getExistingBasket } from "../../utils/storage.js";

export function basketCounter() {
  const counterNumber = document.querySelector("#counter-number");
  const counterContainer = document.querySelector("#counter-container");

  // const htmlSelector = document.querySelectorAll("html");

  const basket = getExistingBasket();

  //  console.log(basket);

  counterNumber.innerHTML = "";
  counterContainer.style.display = "none";

  if (basket.length > 0) {
    let counter = 0;

    for (let i = 0; i < basket.length; i++) {
      counter += Number(basket[i].quantity);
    }
    counterContainer.style.display = "block";
    counterNumber.innerHTML = counter;

    // console.log(htmlSelector[0].className);

    // if (htmlSelector[0].className === "details-page") {
      
    //   counterContainer.classList.add("animation");
    //   setTimeout(function () {
    //     counterContainer.classList.remove("animation");
    //   }, 1500);
    // }
  }
}
