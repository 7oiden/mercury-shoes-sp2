import { getExistingBasket, saveBasket } from "../utils/storage.js";
import { getToken } from "../utils/storage.js";
import descriptionToggler from "../components/productDetails/descriptionToggler.js";
import { basketCounter } from "../components/common/basketCounter.js";

const detailsContainer = document.querySelector(".details__container");

const basket = getExistingBasket();

const token = getToken();

export default function renderDetails(details) {
  let editButton = "";

  if (token) {
    editButton = `<a href="edit-product.html?id=${details.id}" class="edit-button edit-button--details">
        Edit Product
      </a>`;
  }

  let iconClass = "fa-plus";

  ///toggles button class
  let buttonClass = "add-to-basket";
  let buttonText = "Add to basket";

  const itemAlreadyInBasket = basket.find((item) => {
    detailsContainer.innerHTML = "";

    return parseInt(item.id) === details.id;
  });

  if (itemAlreadyInBasket) {
    buttonClass = "remove-from-basket";
    buttonText = "Remove from basket";
  }

  let gender = "Unisex";

  let stockInfo = `<div class="in-stock"></div>`;

  if (!details.stock) {
    stockInfo = `<div class="out-of-stock"></div>`;
  }

  let sizeContent = `
  <div class="details__line-wrapper">
    <label for="size" class="details__label">Size:</label>
    <select id="size">
      <option value="36">36</option>
      <option value="37">37</option>
      <option value="38">38</option>
      <option value="39">39</option>
      <option value="40">40</option>
      <option value="41">41</option>
      <option value="42">42</option>
      <option value="43">43</option>
      <option value="44">44</option>
      <option value="44">45</option>
    </select>
  </div>`;

  let quantityContent = `
  <div class="details__line-wrapper">
  <label for="quantity" class="details__label">Quantity:</label>
    <select id="quantity">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  </div>`;

  detailsContainer.innerHTML = `
  <div class="details__image">
    <img src="${details.image_url}" alt="${
    details.image_alt_text
  }" class="details__image"/>
  </div>
  <div class="details__card">
    <div class="details__head">
      <div class="details__title-wrapper">
        <h1 class="details__title">${details.title}</h1>
        ${editButton}
      </div>
      <p class="details__price">$${details.price.toFixed(2)}</p>
    </div>
    <hr />
    <div class="details__block-wrapper">
      <div class="details__block1">
        <div class="details__value-wrapper">
          <div class="details__line-wrapper">
            <h3 class="details__label">Gender:</h3>
            <p class="details__value">${gender}</p>
          </div>
          <div class="details__line-wrapper">
            <h3 class="details__label">Color:</h3>
            <p class="details__value">${details.color}</p>
          </div>
          <div>
            <form class="quantity-container">${sizeContent}</form>
          </div>
            <form class="quantity-container">${quantityContent}</form>
        </div>
      </div>
      <div class="details__block2">
        <div class="details__heading-wrapper">
          <h2 class="details__sub-heading">Product info:</h2>
          <i aria-hidden="true" class="fas ${iconClass} fa-minus" title="Show/hide product details"></i>
          <span class="sr-only">Show/hide product details</span>
        </div>
        <p class="details__text">${details.description}</p>
      </div>
    </div>
    <hr />
      <div class="details__button-wrapper">
        <div class="button-message"></div>
        <div class="details__stock-wrapper">
          <h3 class="details__stock-label">In stock:</h3>${stockInfo}
        </div>
        <button class="button primary-button ${buttonClass}"
          id="buy-button" 
          data-id="${details.id}"
          data-image_url="${details.image_url}"
          data-image_alt="${details.image_alt_text}"
          data-color="${details.color}"
          data-title="${details.title}"
          data-price="${details.price}"
          data-stock="${details.stock}"
          data-quantity="">
          ${buttonText}</button>
        </div>
    </div>`;

  descriptionToggler();

  const button = document.querySelector("#buy-button");
  const messageContainer = document.querySelector(".button-message");
  const counterContainer = document.querySelector("#counter-container");

  messageContainer.innerHTML = "";

  if (!details.stock) {
    button.classList.add("disabled");
  }

  if (!details.stock && buttonText === "Remove from basket") {
    button.classList.remove("disabled");
  }

  button.addEventListener("click", handleBuyButton);

  function handleBuyButton() {
    if (!details.stock) {
      button.classList.add("disabled");
    }
    this.classList.toggle("add-to-basket");

    if (this.classList.contains("add-to-basket")) {
      this.innerHTML = "Add to basket";
    }

    this.classList.toggle("remove-from-basket");

    if (this.classList.contains("remove-from-basket")) {
      this.innerHTML = "Remove from basket";
    }

    let size = document.getElementById("size").value;
    const selectSize = document.querySelector("#size");

    selectSize.addEventListener("change", (event) => {
      size = event.target.value;
    });

    let quantity = document.getElementById("quantity").value;
    const selectQuantity = document.querySelector("#quantity");

    selectQuantity.addEventListener("change", (event) => {
      quantity = event.target.value;
    });

    const id = this.dataset.id;
    const image_url = this.dataset.image_url;
    const image_alt = this.dataset.image_alt;
    const color = this.dataset.color;
    const title = this.dataset.title;
    const price = this.dataset.price;

    const currentBasket = getExistingBasket();

    const basketInStorage = currentBasket.find((item) => {
      return item.id === id;
    });

    if (!basketInStorage) {
      const basket = {
        id: id,
        image_url: image_url,
        image_alt: image_alt,
        color: color,
        title: title,
        price: price,
        size: size,
        quantity: quantity,
      };

      //runs basket counter animation when product is added
      counterContainer.classList.add("animation");
      setTimeout(function () {
        counterContainer.classList.remove("animation");
      }, 1500);

      currentBasket.push(basket);
      saveBasket(currentBasket);
      basketCounter();
      messageContainer.innerHTML = "Product added to basket.";

      setTimeout(function () {
        messageContainer.innerHTML = "";
      }, 1500);
    } else {
      messageContainer.innerHTML = "Product removed from basket.";

      setTimeout(function () {
        messageContainer.innerHTML = "";
      }, 1500);
      const newBasket = currentBasket.filter((item) => {
        return item.id !== id;
      });

      saveBasket(newBasket);
      basketCounter();
    }
  }
}
