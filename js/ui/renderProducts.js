import { getToken } from "../utils/storage.js";
import { getExistingFavs, saveFavs } from "../utils/storage.js";
import loadMoreItems from "../components/productsOverview/loadMoreButton.js";

const token = getToken();

const productsContainer = document.querySelector(".products__grid");

export function renderProducts(products) {
  const favorites = getExistingFavs();

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
    //   <div class="card__icon-container">
    //     <svg class="card__icon" viewBox="0 0 24 24">
    //       <path fill="currentColor" d="M14.5,7.66L20.64,6.97L17,12L20.68,16.97L14.5,16.32L12.03,22L9.5,16.34L3.36,17.03L7,12L3.32,7.03L9.5,7.68L11.97,2L14.5,7.66Z" />
    //     </svg>
    //   </div>`;
    // }

    let favIconClass = "far";

    const objectAlreadyFav = favorites.find((fav) => {
      return parseInt(fav.id) === product.id;
    });

    if (objectAlreadyFav) {
      favIconClass = "fas";
    }

    productsContainer.innerHTML += `
    <div class="remove-card card__container">
    <i class="${favIconClass} fa-heart" data-id="${product.id}" data-title="${
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

  const favIcons = document.querySelectorAll(".fa-heart");

  favIcons.forEach((icon) => {
    icon.addEventListener("click", handleFavClick);
  });

  function handleFavClick(event) {
    event.stopPropagation();
    this.classList.toggle("fas");
    this.classList.toggle("far");

    const id = this.dataset.id;
    const title = this.dataset.title;
    const image = this.dataset.image;
    const price = this.dataset.price;
    const description = this.dataset.description;

    const currentFavs = getExistingFavs();

    const productInStorage = currentFavs.find((fav) => {
      return fav.id === id;
    });

    if (!productInStorage) {
      const product = {
        id: id,
        title: title,
        image: image,
        price: price,
        description: description,
      };
      currentFavs.push(product);
      saveFavs(currentFavs);
    } else {
      const newFavs = currentFavs.filter((fav) => {
        return fav.id !== id;
      });
      saveFavs(newFavs);
    }
  }
  loadMoreItems(products);
}
