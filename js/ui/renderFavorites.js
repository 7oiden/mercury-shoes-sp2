import { getExistingFavs, saveFavs } from ".././utils/storage.js";

const favList = document.querySelector(".favorites__list");
const clearButton = document.querySelector("#clear-favorites");

let currentFavs = getExistingFavs();

renderFavorites(currentFavs);

export default function renderFavorites() {
  favList.innerHTML = "";

  let favCount = currentFavs.length;

  if (favCount === 0) {
    favList.innerHTML = `<li class="favorites__list--empty">No favorite is added yet</li>`;
    clearButton.style.display = "none";
  }

  currentFavs.forEach((favorite) => {
    favList.innerHTML += `
    <li class="fav">
    <a href="products-details.html?id=${favorite.id}">
    <div class="fav__container">
    <div class="fav__image">
    <img src="${favorite.image}"/>
    </div>
    <div class="fav__body">
    <h2 class="fav__title">${favorite.title}</h2>
    <p>$${favorite.price}</p>
    <p>${favorite.description}</p>
    </div>
    </div>
    </a>
    <svg style="width:1.5rem;height:1.5rem" viewBox="0 0 24 24" class="fav__remove-icon" data-id="${favorite.id}">
    <title>Remove item</title>
    <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
    </svg>
    </li>`;
  });

  const removeIcon = document.querySelectorAll(".fav__remove-icon");

  removeIcon.forEach((icons) => {
    icons.addEventListener("click", handleClick);
  });

  function handleClick(event) {
    event.stopPropagation();
    const id = this.dataset.id;

    const newFavs = currentFavs.filter((item) => {
      if (item.id !== id) {
        return true;
      }
    });

    currentFavs = newFavs;

    saveFavs(newFavs);
    renderFavorites();
  }
}
