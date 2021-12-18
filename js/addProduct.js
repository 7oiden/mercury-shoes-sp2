import { mobileToggler } from "./components/dropdownTogglers.js";
import createAdminNav from "./components/common/createAdminNav.js";
import displayAlert from "./components/common/displayAlert.js";
import { getToken } from "./utils/storage.js";
import { baseUrl } from "./settings/api.js";
import { basketCounter } from "./components/common/basketCounter.js";
import { checkLength, checkMaxLength, validateNumber } from "./utils/validators.js";
import { validateAddForm } from "./components/formValidation/validateAddForm.js";
import { placeholderUrl } from "./settings/constants.js";

const token = getToken();

if (!token) {
  location.href = "/";
}

basketCounter();
createAdminNav();

const alertContainer = document.querySelector(".addalert-container");
const addFormError = document.querySelector(".add-form-error");

const addForm = document.querySelector(".add__form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const color = document.querySelector("#color");
const shortDescription = document.querySelector("#short-description");
const description = document.querySelector("#description");
const productImage = document.querySelector("#product-image");
const imageAltText = document.querySelector("#image-alt-text");

const alert = document.querySelector(".addalert-container");

document.getElementById("product-image").value = placeholderUrl.substring("https://".length);

addForm.addEventListener("submit", submitAddForm);

function submitAddForm(event) {
  event.preventDefault();

  addFormError.innerHTML = "";
  alert.innerHTML = "";

  const titleValue = title.value.trim();
  const priceValue = parseFloat(price.value);
  const colorValue = color.value.trim();
  const shortDescriptionValue = shortDescription.value.trim();
  const descriptionValue = description.value.trim();
  let productImageValue = "https://" + productImage.value.trim();
  const imageAltTextValue = imageAltText.value.trim();

  const featuredValue = document.querySelector(
    'input[name="featured"]:checked'
  ).value;

  const stockValue = document.querySelector(
    'input[name="stock"]:checked'
  ).value;

  // validation
  validateAddForm();

  //automatically adds placeholder image if the input field has been left empty
  if (productImage.value === "") {
    productImageValue = placeholderUrl;
  }

  if (
    checkLength(title.value, 4) &&
    checkLength(color.value, 2) &&
    checkLength(shortDescription.value, 9) &&
    checkMaxLength(shortDescription.value, 131) &&
    checkLength(description.value, 14) &&
    checkLength(imageAltText.value, 9) &&
    validateNumber(price.value)
  ) {
    addProduct(
      titleValue,
      priceValue,
      colorValue,
      shortDescriptionValue,
      descriptionValue,
      productImageValue,
      imageAltTextValue,
      featuredValue,
      stockValue
    );
  } else {
    window.scrollTo(0, 200);

    displayAlert(
      "warning",
      "Please attend to input errors before proceeding",
      ".add-form-error"
    );
  }

  async function addProduct(
    title,
    price,
    color,
    short_description,
    description,
    image_url,
    image_alt_text,
    featured,
    stock
  ) {
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

    const addData = JSON.stringify(jsonData);

    const options = {
      method: "POST",
      body: addData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const productsUrl = baseUrl + "products";

    try {
      const response = await fetch(productsUrl, options);
      const json = await response.json();

      // console.log(json);

      if (json.created_at) {
        displayAlert(
          "success",
          "New Product successfully created",
          ".addalert-container"
        );

        setTimeout(function () {
          alertContainer.innerHTML = "";
        }, 2000);

        addForm.reset();
      }

      if (json.error) {
        displayAlert("error", json.message, ".add__form");
      }
      // console.log(json);
    } catch (error) {
      displayAlert("error", "Something went wrong!", ".add__form");
    }
  }
}
