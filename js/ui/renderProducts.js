import { getToken } from "../utils/storage.js";

const token = getToken();

const productsContainer = document.querySelector(".products__grid");

export function renderProducts(products) {
  console.log(products);

  productsContainer.innerHTML = "";

  products.forEach((product) => {
    let editProd = "";
    let adminClass = "";

    if (token) {
      editProd = `<a href="edit-product.html?id=${product.id}" class="edit-button">
        Edit Product
      </a>`;
      adminClass = "card--admin"
    }

    let featuredIcon = "";

    if (product.featured) {
      featuredIcon = `<div class="card__icon-container"><svg class="card__icon" viewBox="0 0 24 24">
        <path fill="currentColor" d="M14.5,7.66L20.64,6.97L17,12L20.68,16.97L14.5,16.32L12.03,22L9.5,16.34L3.36,17.03L7,12L3.32,7.03L9.5,7.68L11.97,2L14.5,7.66Z" />
        </svg></div>`;
    }

    productsContainer.innerHTML += `
      <div class="remove-card card__container">
        <a href="products-details.html?id=${product.id}" class="card ${adminClass}">
        <div class="card__image-container">
        <img src="${product.image_url}" alt="${product.image_alt_text}" 
        class="card__image" />
        </div>
        <div class="card__body">
        <div class="card__header-wrapper"> 
        <h2 class="card__title">${product.title}</h2>
        ${featuredIcon}
        </div>
        <p class="card__price">$${product.price.toFixed(2)}</p>
        <div class="test">
        <p class="card__text">${product.short_description}</p>
        </div>
        </div>
        </a>
        ${editProd}
      </div>`;
  });

  const productCards = document.querySelectorAll(".card__container");
  const loadButton = document.querySelector("#load-button");

  let num = 8;

  for (let i = 0; i < productCards.length; i++) {
    if (i < num) {
      productCards[i].classList.remove("remove-card");
    }
  }

  loadButton.onclick = function () {
    num = num + 8;

    for (let i = 0; i < productCards.length; i++) {
      if (i < num) {
        productCards[i].classList.remove("remove-card");
      }

      if (num >= productCards.length) {
         loadButton.classList.add("disabled")
         loadButton.innerHTML = "No more products"
      }
    }
  };
}
