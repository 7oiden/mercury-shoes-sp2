export function clearBasket() {
  const clearButton = document.querySelector("#clear-basket");
  const basketHeading = document.querySelector(".basket__heading-container");
  const basketContainer = document.querySelector(".basket__list");
  const counterWrapper = document.querySelector("#counter");

  clearButton.addEventListener("click", clearBasketList);

  function clearBasketList() {
    if (confirm("Are you sure you want to clear all items from the basket?")) {
      localStorage.removeItem("basket-items");
      basketContainer.innerHTML = `<li class="basket-list-empty">Basket is empty...</li>`;
      clearButton.style.display = "none";
      basketHeading.innerHTML = `<h1 class="basket__heading">Basket</h1>`;
      counterWrapper.style.display = "none";
    }
  }
}






    

