import { getToken } from "./utils/storage.js";
import displayAlert from "./components/alerts/displayAlert.js";
import { baseUrl } from "./settings/api.js";
import createNavLinks from "./ui/createNavLinks.js";
import { basketCounter } from "./components/common/basketCounter.js";
import { mobileMenuToggler } from "./components/togglers/mobileMenuToggler.js";
import {
  getExistingBasket,
  saveBasket,
  getExistingFavs,
  saveFavs,
} from "./utils/storage.js";
import { placeholderUrlShort } from "./settings/constants.js";
import deleteButton from "./components/buttons/deleteProdButton.js";
import renderBanner from "./ui/renderBanner.js";
import { validateEditForm } from "./components/formValidation/validateEditForm.js";
import {
  checkLength,
  checkMaxLength,
  validateNumber,
} from "./utils/validators.js";

const token = getToken();

if (!token) {
  document.location.href = "/";
}

// console.log(token);

renderBanner();
basketCounter();
createNavLinks();
mobileMenuToggler();

const alertContainer = document.querySelector(".edit-alert-container");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
  document.location.href = "/";
}

const productUrl = baseUrl + "products/" + id;

console.log(id);

const editFormError = document.querySelector(".edit-form-error");
const editForm = document.querySelector(".edit__form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const color = document.querySelector("#color");
const shortDescription = document.querySelector("#short-description");
const description = document.querySelector("#description");
const productImage = document.querySelector("#product-image");
const imageAltText = document.querySelector("#image-alt-text");
const loader = document.querySelector(".loader-container");

const idInput = document.querySelector("#id");
const featuredNo = document.querySelector("#featured-no");
const featuredYes = document.querySelector("#featured-yes");
const stockNo = document.querySelector("#stock-no");
const stockYes = document.querySelector("#stock-yes");

(async function () {
  try {
    const response = await fetch(productUrl);
    const details = await response.json();

    console.log(details);

    if (details.featured === true) {
      featuredYes.checked = true;
      featuredNo.checked = false;
    } else {
      featuredYes.checked = false;
      featuredNo.checked = true;
    }

    if (details.stock === true) {
      stockYes.checked = true;
      stockNo.checked = false;
    } else {
      stockYes.checked = false;
      stockNo.checked = true;
    }

    const imgUrl = details.image_url;

    title.value = details.title;
    price.value = details.price;
    color.value = details.color;
    shortDescription.value = details.short_description;
    description.value = details.description;
    productImage.value = imgUrl.substring("https://".length);
    imageAltText.value = details.image_alt_text;
    idInput.value = id;

    // console.log(id);
    // console.log(details.title);

    if (!details.main_product) {
      deleteButton(id);
    } else {
      displayAlert(
        "warning",
        "This product is linked to the news section at the home-page and can not be deleted.",
        ".edit-alert-container"
      );
    }
  } catch (error) {
    displayAlert(
      "error",
      "An error has occurred when trying to fetch the API",
      ".edit__form"
    );
  } finally {
    loader.style.display = "none";
  }
})();

editForm.addEventListener("submit", submitEditForm);

function submitEditForm(event) {
  //automatically adds placeholder image if the input field has been left empty
  if (productImage.value === "") {
    document.getElementById("product-image").value = placeholderUrlShort;
  }

  event.preventDefault();

  editFormError.innerHTML = "";
  alertContainer.innerHTML = "";

  const idValue = idInput.value;
  const titleValue = title.value.trim();
  const priceValue = parseFloat(price.value);
  const colorValue = color.value.trim();
  const shortDescriptionValue = shortDescription.value.trim();
  const descriptionValue = description.value.trim();
  const productImageValue = "https://" + productImage.value.trim();
  const imageAltTextValue = imageAltText.value.trim();

  const featuredValue = document.querySelector(
    'input[name="featured"]:checked'
  ).value;

  const stockValue = document.querySelector(
    'input[name="stock"]:checked'
  ).value;

  validateEditForm();

  if (
    checkLength(title.value, 4) &&
    checkLength(color.value, 2) &&
    checkLength(shortDescription.value, 9) &&
    checkMaxLength(shortDescription.value, 131) &&
    checkLength(description.value, 14) &&
    validateNumber(price.value) &&
    checkLength(imageAltText.value, 9)
  ) {
    updateProduct(
      titleValue,
      priceValue,
      colorValue,
      shortDescriptionValue,
      descriptionValue,
      productImageValue,
      imageAltTextValue,
      featuredValue,
      stockValue,
      idValue
    );
  } else {
    window.scrollTo(0, 200);

    displayAlert(
      "warning",
      "Please attend to input errors before proceeding",
      ".edit-form-error"
    );
  }

  async function updateProduct(
    title,
    price,
    color,
    short_description,
    description,
    image_url,
    image_alt_text,
    featured,
    stock,
    id
  ) {
    //updates current product in basket list
    const currentBasket = getExistingBasket();

    const itemInStorage = currentBasket.find((item) => {
      return item.id === id;
    });

    if (itemInStorage) {
      const basketIndex = currentBasket.findIndex((item) => {
        return item.id === id;
      });

      if (id) {
        currentBasket[basketIndex].id = id;
        currentBasket[basketIndex].title = title;
        currentBasket[basketIndex].price = price;
        currentBasket[basketIndex].color = color;
        currentBasket[basketIndex].short_description = short_description;
        currentBasket[basketIndex].image_url = image_url;
        currentBasket[basketIndex].image_alt_text = image_alt_text;
        currentBasket[basketIndex].featured = featured;
        currentBasket[basketIndex].stock = stock;

        saveBasket(currentBasket);
      }
    }

    //updates current product in favorites list
    const currentFavs = getExistingFavs();

    const itemInFavs = currentFavs.find((fav) => {
      return fav.id === id;
    });

    if (itemInFavs) {
      const favIndex = currentFavs.findIndex((fav) => {
        return fav.id === id;
      });

      if (id) {
        currentFavs[favIndex].id = id;
        currentFavs[favIndex].title = title;
        currentFavs[favIndex].price = price;
        currentFavs[favIndex].color = color;
        currentFavs[favIndex].short_description = short_description;
        currentFavs[favIndex].image_url = image_url;
        currentFavs[favIndex].image_alt_text = image_alt_text;
        currentFavs[favIndex].featured = featured;
        currentFavs[favIndex].stock = stock;

        saveFavs(currentFavs);
      }
    }
    const jsonData = {
        title: title,
        price: price,
        color: color,
        short_description: short_description,
        description: description,
        image_url: image_url,
        image_alt_text: image_alt_text,
        featured: featured,
        stock: stock,
    };

    console.log(jsonData);

    const editData = JSON.stringify(jsonData);

    const options = {
      method: "PUT",
      body: editData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const editUrl = baseUrl + "products/" + id;

    try {
      const response = await fetch(editUrl, options);
      const json = await response.json();

      if (json.updated_at) {
        displayAlert(
          "success",
          "Product successfully updated",
          ".edit-alert-container"
        );

        setTimeout(function () {
          document.location.href = "products-overview.html";
        }, 1500);
      }

      if (json.error) {
        displayAlert("error", json.message, ".edit__form");
      }
    } catch (error) {
      displayAlert("error", "Something went wrong!", ".edit__form");
    }
  }
}
