import { mobileToggler } from "./components/dropdownTogglers.js";
// import { adminToggler } from "./components/dropdownTogglers.js";
import createAdminNav from "./components/common/createAdminNav.js";
import displayAlert from "./components/common/displayAlert.js";
// import { alertContainer } from "./settings/constants.js";
import { getToken } from "./utils/storage.js";
import { baseUrl } from "./settings/api.js";

const alertContainer = document.querySelector(".addalert-container");

createAdminNav();

const addForm = document.querySelector(".add__form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const shortDescription = document.querySelector("#short-description");
const description = document.querySelector("#description");
const productImage = document.querySelector("#product-image");
const imageAltText = document.querySelector("#image-alt-text");

const alert = document.querySelector(".addalert-container");

addForm.addEventListener("submit", submitAddForm);

function submitAddForm(event) {
  event.preventDefault();

  alert.innerHTML = "";

  const titleValue = title.value.trim();
  const priceValue = parseFloat(price.value);
  const shortDescriptionValue = shortDescription.value.trim();
  const descriptionValue = description.value.trim();
  const productImageValue = productImage.value.trim();
  const imageAltTextValue = imageAltText.value.trim();

  console.log(productImageValue);

  const featuredValue = document.querySelector(
    'input[name="featured"]:checked'
  ).value;

  const stockValue = document.querySelector(
    'input[name="stock"]:checked'
  ).value;

  if (
    titleValue.length === 0 ||
    isNaN(priceValue) ||
    shortDescriptionValue.length === 0 ||
    descriptionValue.length === 0 ||
    productImageValue.length === 0 ||
    imageAltTextValue.length === 0
  ) {
    return displayAlert(
      "warning",
      "Please fill in all fields before proceeding",
      ".addalert-container"
    );
  }

  addProduct(
    titleValue,
    priceValue,
    shortDescriptionValue,
    descriptionValue,
    productImageValue,
    imageAltTextValue,
    featuredValue,
    stockValue
  );
}

async function addProduct(
  title,
  price,
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
    short_description: short_description,
    description: description,
    image_url: image_url,
    image_alt_text: image_alt_text,
    featured: featured,
    stock: stock,
  };

  const addData = JSON.stringify(jsonData);

  const token = getToken();

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

    console.log(json);

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
      displayAlert("error", json.message, ".addalert-container");
    }
    console.log(json);
  } catch (error) {
    displayAlert("error", "Something went wrong!", ".addalert-container");
  }
}
