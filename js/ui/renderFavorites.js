import { getExistingFavs, saveFavs } from ".././utils/storage.js";

const favList = document.querySelector(".favorites__list");
const clearButton = document.querySelector("#clear-favorites");
const headingContainer = document.querySelector(".fav__heading-container");

let currentFavs = getExistingFavs();

renderFavorites(currentFavs);

export default function renderFavorites() {
  favList.innerHTML = "";

  let favCount = currentFavs.length;

  headingContainer.innerHTML = `<h1 class="about__heading" id="about">Favorites</h1><span class="fav__count">(${favCount})</span>`;

  if (favCount === 0) {
    headingContainer.innerHTML = `<h1 class="about__heading" id="about">Favorites</h1>`;
    favList.innerHTML = `<li class="favorites__list--empty">No favorite is added yet</li>`;
    clearButton.style.display = "none";
  }

  currentFavs.forEach((favorite) => {
    favList.innerHTML += `
    <li class="fav">
      <svg style="width:2rem;height:2rem" viewBox="0 0 24 24" class="fav__remove-icon" data-id="${favorite.id}">
        <title>Remove item</title>
        <path fill="currentColor" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />
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
