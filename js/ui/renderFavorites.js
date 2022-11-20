import { getExistingFavs, saveFavs } from ".././utils/storage.js";
import { clearFavs } from ".././components/basket/clearFavs.js";

export default function renderFavorites() {
  const favorites = getExistingFavs();

  const favList = document.querySelector(".favorites__list");
  const clearButton = document.querySelector("#clear-favorites");

  let favCount = favorites.length;

  if (favCount === 0) {
    favList.innerHTML = `<div class="card favorites-card"><p class="fav-message">Favorites list is empty...</p></div>`;
    clearButton.style.display = "none";
  }

  favorites.forEach((favorite) => {
    favList.innerHTML += `
    <li><a href="products-details.html?id=${favorite.id}">${favorite.title}</a></li>`;
  });

  clearFavs();
}
