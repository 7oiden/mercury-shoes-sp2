import { baseUrl } from "./settings/api.js";
import displayAlert from "./components/common/displayAlert.js";
import { mobileToggler } from "./components/dropdownTogglers.js";
import { adminToggler } from "./components/dropdownTogglers.js";
import { validateNewsletterForm } from "./components/newsletter.js";
import createAdminNav from "./components/common/createAdminNav.js";

import { getExistingBasket, saveBasket } from "./utils/storage.js";
import { basketCounter } from "./components/common/basketCounter.js";

basketCounter();

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

// const breadcrumbCurrent = document.querySelector(".breadcrumbs__current");
const detailsWrapper = document.querySelector(".product-details__wrapper");

function createHtml(details) {
  let imgUrl = details.image_url;

  if (details.image) {
    imgUrl = "http://localhost:9000" + details.image.url;
  }

  let altText = details.image_alt_text;

  if (details.image) {
    altText = details.image.alternativeText;
  }

  detailsWrapper.innerHTML = "";

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

  let genderContent = `
          <label for="gender" class="product-details__label">Gender:</label>
          <select id="gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
  `;

  let colorContent = `
  <div>
    <input type="radio" id="white" name="white" value="white" />
    <label for="white">White</label>
  </div>
 <div>
    <input type="radio" id="white" name="white" value="white" />
    <label for="white">White</label>
  </div>
  <div>
    <input type="radio" id="white" name="white" value="white" />
    <label for="white">White</label>
  </div>

  `;

  let quantityContent = `
          <label for="quantity" class="product-details__label">Quantity:</label>
          <select id="quantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          `;

  // breadcrumbCurrent.innerHTML = `${details.title}`;

  detailsWrapper.innerHTML = `<div class="product-details__image">
  <img src="${imgUrl}" alt="${altText}" class="product-details__image"/>
  </div>
  <div class="product-details__content">
  <div class="product-details__head">
  <h1 class="product-details__title">${details.title}</h1>
  <p class="product-details__price">$${details.price.toFixed(2)}</p>
  </div>
  <hr />
  <div class="product-details__content-wrapper">
  <div class="product-details__block1">
    <form class="gender-container">${genderContent}</form>
    <form class="color-container">${colorContent}</form>
    <div>
    <p class="product-details__label">Size:</p>
    <div class="product-details__box-wrapper">
    <div class="product-details__box">
    <div class="product-details__size">41</div>
    </div>
    <div class="product-details__box">
    <div class="product-details__size">43</div>
    </div>
    <div class="product-details__box">
    <div class="product-details__size">43</div>
    </div>
    <div class="product-details__box">
    <div class="product-details__size">44</div>
    </div>
    <div class="product-details__box">
    <div class="product-details__size">45</div>
    </div>
    </div>
    </div>
    <div>
    <div class="product-details__stock-container">
    <p class="product-details__label">In stock:</p><div>${stockIcon}</div>
    </div>
    <div class="button-message"></div>
    <form class="quantity-container">${quantityContent}</form>
    <button class="button primary-button"
    id="buy-button" 
    data-id="${details.id}"
    data-image="${imgUrl}"
    data-title="${details.title}"
    data-price="${details.price}"
    data-quantity="">
    Add to basket</button>
    </div>
    </div>
    <div class="product-details__block2">
    <h2 class="product-details__sub-heading">Product info:</h2>
    <p class="product-details__text">${details.description}</p>
    </div>
    </div>
    </div>
  `;

  console.log(details.stock);

  const button = document.querySelector("#buy-button");
  const messageContainer = document.querySelector(".button-message");

  messageContainer.innerHTML = "";

  if (!details.stock) {
    button.classList.add("disabled");
  }

  button.addEventListener("click", handleBuyButton);

  function handleBuyButton() {
    let quantity = document.getElementById("quantity").value;
    const selectQuantity = document.querySelector("#quantity");

    selectQuantity.addEventListener("change", (event) => {
      quantity = event.target.value;
    });

    let gender = document.getElementById("gender").value;
    const selectGender = document.querySelector("#gender");

    selectGender.addEventListener("change", (event) => {
      quantity = event.target.value;
    });

    const id = this.dataset.id;
    const image = this.dataset.image;
    const title = this.dataset.title;
    const price = this.dataset.price;

    const currentBasket = getExistingBasket();

    // const counterContainer = document.querySelector("#test");
    // const counterWrapper = document.querySelector("#counter");

    const basketInStorage = currentBasket.find((item) => {
      return item.id === id;
    });

    if (!basketInStorage) {
      const basket = {
        id: id,
        image: image,
        title: title,
        price: price,
        quantity: quantity,
        gender: gender,
      };
      // counterWrapper.style.display = "block";
      // counterContainer.innerHTML = currentBasket.length + 1;
      currentBasket.push(basket);
      saveBasket(currentBasket);
      basketCounter();
      location.reload(true);
    } else {
      messageContainer.innerHTML = "Product already in basket.";

      setTimeout(function () {
        messageContainer.innerHTML = "";
      }, 2000);
    }
    // } else {
    //   const newBasket = currentBasket.filter((item) => {
    //     return item.id !== id;
    //   });
    //   saveBasket(newBasket);
    // }
  }
}
