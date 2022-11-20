import { getExistingFavs } from "./utils/storage.js";
import createNavLinks from "./components/common/createNavLinks.js";
import { basketCounter } from "./components/common/basketCounter.js";
import {
  mobileToggler,
  adminToggler,
} from "./components/common/dropdownTogglers.js";
import { clearFavs } from "./components/basket/clearFavs.js";

createNavLinks();
basketCounter();
clearFavs();

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
    <li>${favorite.title}</li>`;
});

