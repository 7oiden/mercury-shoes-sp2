export function clearBasket() {
  const clearButton = document.querySelector("#clear-basket");
  const basketContainer = document.querySelector(".basket__list");
  const counterContainer = document.querySelector("#counter-container");
  const summaryContainer = document.querySelector(".summary");
  const checkoutButton = document.querySelector(".checkout-button");

  clearButton.addEventListener("click", clearBasketList);

  function clearBasketList() {
    if (confirm("Are you sure you want to clear all items from the basket?")) {
      localStorage.removeItem("basket-items");
      basketContainer.innerHTML = `<li class="basket__list--empty">Your basket is now empty...</li>`;
      clearButton.style.display = "none";
      summaryContainer.style.display = "none";

      setTimeout(function () {
        document.location.href = "products-overview.html";
      }, 1500);
    } 
  }
}
