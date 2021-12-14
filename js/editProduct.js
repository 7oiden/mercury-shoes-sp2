import { mobileToggler } from "./components/dropdownTogglers.js";
import createAdminNav from "./components/common/createAdminNav.js";
import { getToken } from "./utils/storage.js";
import displayAlert from "./components/common/displayAlert.js";
import { baseUrl } from "./settings/api.js";
import { placeholderUrl } from "./settings/constants.js";
import deleteButton from "./components/editProducts/deleteButton.js";
import { basketCounter } from "./components/common/basketCounter.js";
import { getExistingBasket, saveBasket } from "./utils/storage.js";
import { validateEditForm } from "./components/formValidation/validateEditForm.js";
import {
  checkLength,
  checkMaxLength,
  validateNumber,
} from "./utils/validators.js";

const token = getToken();

if (!token) {
  location.href = "/";
}

// const newsButton = document.querySelector("#news-test");

// console.log(newsButton.getAttribute("data-test"));

basketCounter();

const alertContainer = document.querySelector(".editalert-container");

createAdminNav();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
  document.location.href = "/";
}

const productUrl = baseUrl + "products/" + id;

const editFormError = document.querySelector(".edit-form-error");

const editForm = document.querySelector(".edit__form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const color = document.querySelector("#color");
const shortDescription = document.querySelector("#short-description");
const description = document.querySelector("#description");
const productImage = document.querySelector("#product-image");
const imageAltText = document.querySelector("#image-alt-text");
const loader = document.querySelector(".loader");

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
    idInput.value = details.id;

    if (!details.main_product) {
      deleteButton(details.id);
    } else {
      displayAlert(
        "warning",
        "This product is linked to the new section on the home-page and can not be deleted.",
        ".editalert-container"
      );
    }
 
  } catch (error) {
    displayAlert("error", error, ".alert-container");
    //console.log(error);
  } finally {
    loader.style.display = "none";
  }
})();

editForm.addEventListener("submit", submitEditForm);

function submitEditForm(event) {

  //automatically adds placeholder image if the input field has been left empty
  if (productImage.value === "") {
    document.getElementById("product-image").value = placeholderUrl
  }

  event.preventDefault();

  console.log("hi");

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

  // validation
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
      const basketIndex = currentBasket.findIndex((fav) => {
        return fav.id === id;
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

    const editData = JSON.stringify(jsonData);

    // const token = getToken();

    // console.log(editData);

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
          ".editalert-container"
        );

        setTimeout(function () {
          document.location.href = "products-overview.html";
        }, 1500);
      }

      if (json.error) {
        displayAlert("error", json.message, ".alert-container");
      }
    } catch (error) {
      displayAlert("error", "Something went wrong!", ".alert-container");
    }
  }
}
