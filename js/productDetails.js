import { baseUrl } from "./settings/api.js";
import displayAlert from "./components/common/displayAlert.js";
import { mobileToggler } from "./components/dropdownTogglers.js";
import { adminToggler } from "./components/dropdownTogglers.js";
import createAdminNav from "./components/common/createAdminNav.js";

createAdminNav();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
  document.location.href = "/";
}

const detailUrl = baseUrl + "products/" + id;

console.log(detailUrl);

(async function () {
  try {
    const response = await fetch(detailUrl);
    const details = await response.json();

    console.log(details);

    document.title = details.title;

    createHtml(details);
  } catch (error) {
    displayAlert("alert error", error, ".product-details-container");
  }
})();

const loader = document.querySelector(".loader");

const imageContainer = document.querySelector(".product-details__image");
const titleContainer = document.querySelector(".product-details__title");
const priceContainer = document.querySelector(".product-details__price");
const detailsContainer = document.querySelector(".product-details__text");
const stockContainer = document.querySelector(
  ".product-details__stock-container"
);
const button = document.querySelector(".buy-button");

function createHtml(details) {
  const imgUrl = "http://localhost:9000" + details.image.url;

  let stockIcon = `<svg class="checkmark" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"
                        />
                      </svg>`;

  if (!details.stock) {
    stockIcon = `<svg class="cross" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z"
                  />
                </svg>`;
  }

  console.log(imgUrl);
  loader.style.display = "none";
  imageContainer.innerHTML = `<img src="${imgUrl}" class="product-details__image"/>`;
  titleContainer.innerHTML = `${details.title}`;
  priceContainer.innerHTML = `$${details.price.toFixed(2)}`;
  detailsContainer.innerHTML = `${details.description}`;
  stockContainer.innerHTML = `<p class="product-details__label">In stock:</p><div>${stockIcon}</div>`;

  console.log(details.stock);

  if (!details.stock) {
    button.classList.add("disabled");
  }
}
