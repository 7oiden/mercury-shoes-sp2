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
      <path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
      </svg>
      
       <div class="fav__container">
        <div class="fav__image">
        <a href="products-details.html?id=${favorite.id}">
          <img src="${favorite.image}"/>
          </a>
        </div>
        <div class="fav__body">
        <div class="fav__header">
        <a href="products-details.html?id=${favorite.id}">
          <h2 class="fav__title">${favorite.title}</h2>
          </a>
          <span>$${favorite.price}</span>
          </div>
          <p>${favorite.description}</p>
         </div>
        </div>
     
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
