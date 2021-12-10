export function clearBasket() {
  const clearButton = document.querySelector("#clear-basket");
  const basketHeading = document.querySelector(".basket__heading-container");
  const basketContainer = document.querySelector(".basket__list");
  const counterContainer = document.querySelector("#counter-container");

  clearButton.addEventListener("click", clearBasketList);

  function clearBasketList() {
    if (confirm("Are you sure you want to clear all items from the basket?")) {
      localStorage.removeItem("basket-items");
      basketContainer.innerHTML = `<li class="basket-list-empty">Basket is empty...</li>`;
      clearButton.style.display = "none";
      counterContainer.style.display = "none";
    }
  }
}






    

