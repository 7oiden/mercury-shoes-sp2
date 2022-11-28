export function clearBasketButton() {
  const clearButton = document.querySelector("#clear-basket");
  const basketContainer = document.querySelector(".basket__list");
  const summaryContainer = document.querySelector(".summary");

  clearButton.addEventListener("click", clearBasketList);

  function clearBasketList() {
    if (confirm("Are you sure you want to clear all items from the basket?")) {
      localStorage.removeItem("basket-items");
      window.scrollTo(0, 0);
      basketContainer.innerHTML = `<li class="basket__list--empty">Your basket is now empty...</li>`;
      clearButton.style.display = "none";
      summaryContainer.style.display = "none";

      setTimeout(function () {
        document.location.href = "products-overview.html";
      }, 1500);
    } 
  }
}
