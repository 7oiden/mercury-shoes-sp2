import { articleContainer } from "../../settings/constants.js";

export default function clearBasket() {
  const clearButton = document.querySelector(".clear-button");
  const heading = document.querySelector(".heading-container");

  clearButton.addEventListener("click", clearFavsList);

  function clearFavsList() {
    if (confirm("Are you sure you want to clear favorites list?")) {
      localStorage.removeItem("favorites");
      articleContainer.innerHTML = `<div class="card favorites-card"><p class="fav-message">Favorites list is empty...</p></div>`;
      clearButton.style.display = "none";
      heading.innerHTML = `<h1>Favorites</h1>`;
    }
  }
}
