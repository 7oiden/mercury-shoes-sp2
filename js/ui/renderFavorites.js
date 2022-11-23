import { getExistingFavs, saveFavs } from ".././utils/storage.js";
import descriptionToggler from "../components/productDetails/descriptionToggler.js";

const favList = document.querySelector(".favorites__list");
const clearButton = document.querySelector("#clear-favorites");
const headingContainer = document.querySelector(".fav__heading-container");

let currentFavs = getExistingFavs();

renderFavorites(currentFavs);

export default function renderFavorites() {
  favList.innerHTML = "";

  let favCount = currentFavs.length;

  let showIconClass = "fa-plus";

  headingContainer.innerHTML = `<h1 class="about__heading" id="about">Favorites</h1><span class="fav__count">(${favCount})</span>`;

  if (favCount === 0) {
    headingContainer.innerHTML = `<h1 class="about__heading" id="about">Favorites</h1>`;
    favList.innerHTML = `<li class="favorites__list--empty">No favorite is added yet</li>`;
    clearButton.style.display = "none";
  }

  currentFavs.forEach((favorite) => {
    favList.innerHTML += `
    <li class="fav">
      <svg style="width:1.75rem;height:1.75rem" viewBox="0 0 24 24" class="fav__remove-icon" data-id="${favorite.id}">
      <title>Remove item</title>
        <path fill="currentColor" d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z" />
      </svg>
      <a href="products-details.html?id=${favorite.id}">
       <div class="fav__container">
        <div class="fav__image">
          <img src="${favorite.image}"/>
        </div>
        <div class="fav__body">
        <div class="fav__header">
          <h2 class="fav__title">${favorite.title}</h2>
          <span>$${favorite.price}</span>
          </div>
          <p>${favorite.description}</p>
         </div>
        </div>
      </a>
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
