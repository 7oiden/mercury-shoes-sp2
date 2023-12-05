import { getToken } from "../utils/storage.js";
import { getExistingFavs } from "../utils/storage.js";
// import loadMoreItems from "../components/buttons/loadMoreButton.js";
import handleFav from "../components/common/handleFav.js";

const token = getToken();

const productsContainer = document.querySelector(".products__grid");
// const loadButton = document.querySelector("#load-button");

export function renderProducts(products) {
  const favorites = getExistingFavs();
  productsContainer.innerHTML = "";
  // loadButton.style.display = "block";

  console.log(products);

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

    let featBadge = "";

    if (product.featured) {
      featBadge = `
      <div class="card__feat-badge">Featured</div>`;
    }

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
            <img src="${product.image_url}" alt="${
      product.image_alt_text
    }" 
            class="card__image" />
          </div>
          <div class="card__body">
              <h2 class="card__title">${product.title}</h2>
            <p class="card__price">$${product.price.toFixed(2)}</p>
            </div>
            ${featBadge}
      </a>
      ${editProd}
      </div>`;
  });

  handleFav();
  // loadMoreItems(products);
}
