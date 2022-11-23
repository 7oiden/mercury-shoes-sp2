import { getToken } from "../utils/storage.js";
import { getExistingFavs} from "../utils/storage.js";
import loadMoreItems from "../components/productsOverview/loadMoreButton.js";
import handleFav from "../components/common/handleFav.js";

const token = getToken();
const favorites = getExistingFavs();

const productsContainer = document.querySelector(".products__grid");

export function renderProducts(products) {
  productsContainer.innerHTML = "";

  products.forEach((product) => {
    let editProd = "";

    //removes bottom border when edit button is displayed
    let adminClass = "";

    if (token) {
      editProd = `
      <a href="edit-product.html?id=${product.id}" class="edit-button">
      Edit Product
      </a>`;

      adminClass = "card__admin";
    }

    // let featuredIcon = "";

    // if (product.featured) {
    //   featuredIcon = `
    //   <svg viewBox="0 0 24 24" class="card__feat-icon">
    //   <path fill="currentColor" d="M8.58,17.25L9.5,13.36L6.5,10.78L10.45,10.41L12,6.8L13.55,10.45L17.5,10.78L14.5,13.36L15.42,17.25L12,15.19L8.58,17.25M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
    //   </svg>`;
    // }

    let favIconClass = "far";
    let favIconTitle = "Add favorite";

    const objectAlreadyFav = favorites.find((fav) => {
      return parseInt(fav.id) === product.id;
    });

    if (objectAlreadyFav) {
      favIconClass = "fas";
      favIconTitle = "Remove favorite";
    }

    productsContainer.innerHTML += `
    <div class="remove-card card__container">
    <i title="${favIconTitle}" id="card-fav-icon" class="${favIconClass} fa-heart" data-id="${
      product.id
    }" data-image="${product.image_url}" data-title="${
      product.title
    }" data-price="${product.price}" data-description="${
      product.short_description
    }"></i>
      <a href="products-details.html?id=${
        product.id
      }" class="card ${adminClass}">
          <div class="card__image-container">
            <img src="${product.image_url}" alt="${product.image_alt_text}" 
            class="card__image" />
          </div>
          <div class="card__body">
              <h2 class="card__title">${product.title}</h2>
            <p class="card__price">$${product.price.toFixed(2)}</p>
            </div>
      </a>${editProd}</div>`;
  });

  handleFav();
  loadMoreItems(products);
}
