export function clearBasket() {
  const clearButton = document.querySelector("#clear-basket");
  const basketContainer = document.querySelector(".basket__list");
  const counterContainer = document.querySelector("#counter-container");
  const summaryContainer = document.querySelector(".summary");

  clearButton.addEventListener("click", clearBasketList);

  function clearBasketList() {
    if (confirm("Are you sure you want to clear all items from the basket?")) {
      localStorage.removeItem("basket-items");
      basketContainer.innerHTML = `<li class="basket__list--empty">Your basket is empty...</li>`;
      clearButton.style.display = "none";
      counterContainer.style.display = "none";
      // summaryContainer.style.display = "none"
    }
  }
}
