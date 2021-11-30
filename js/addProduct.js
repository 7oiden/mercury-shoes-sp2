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

const titleError = document.querySelector("#add-title-error");
const priceError = document.querySelector("#add-price-error");
const shortDescriptionError = document.querySelector(
  "#add-short-description-error"
);
const descriptionError = document.querySelector("#add-description-error");
const urlError = document.querySelector("#add-url-error");
const altTextError = document.querySelector("#add-alt-text-error");

const alert = document.querySelector(".addalert-container");

// title.addEventListener("keyup", checkAddInput);
// shortDescription.addEventListener("keyup", checkAddInput);
// description.addEventListener("keyup", checkAddInput);
// imageAltText.addEventListener("keyup", checkAddInput);

addForm.addEventListener("submit", submitAddForm);

function submitAddForm(event) {
  event.preventDefault();

  alert.innerHTML = "";

  // console.log(productImageValue);

  const titleValue = title.value.trim();
  const priceValue = parseFloat(price.value);
  const shortDescriptionValue = shortDescription.value.trim();
  const descriptionValue = description.value.trim();
  const productImageValue = productImage.value.trim();
  const imageAltTextValue = imageAltText.value.trim();

  const featuredValue = document.querySelector(
    'input[name="featured"]:checked'
  ).value;

  const stockValue = document.querySelector(
    'input[name="stock"]:checked'
  ).value;

  // if (
  //   titleValue.length === 0 ||
  //   isNaN(priceValue) ||
  //   shortDescriptionValue.length === 0 ||
  //   descriptionValue.length === 0 ||
  //   productImageValue.length === 0 ||
  //   imageAltTextValue.length === 0
  // ) {
  //   return displayAlert(
  //     "warning",
  //     "Please fill in all fields before proceeding",
  //     ".addalert-container"
  //   );
  // }

  //// validation
  function checkLength(value, len) {
    if (value.trim().length > len) {
      return true;
    } else {
      return false;
    }
  }

  function checkContactInput() {
    if (checkLength(title.value, 4)) {
      titleError.style.display = "none";
    } else {
      titleError.style.display = "block";
    }

    if (checkLength(shortDescription.value, 9)) {
      shortDescriptionError.style.display = "none";
    } else {
      shortDescriptionError.style.display = "block";
    }

    if (checkLength(description.value, 14)) {
      descriptionError.style.display = "none";
    } else {
      descriptionError.style.display = "block";
    }

    if (checkLength(imageAltText.value, 9)) {
      altTextError.style.display = "none";
    } else {
      altTextError.style.display = "block";
    }
  }

  title.addEventListener("keyup", checkContactInput);
  shortDescription.addEventListener("keyup", checkContactInput);
  description.addEventListener("keyup", checkContactInput);
  imageAltText.addEventListener("keyup", checkContactInput);
 
  
  title.onfocus = function () {
    title.style.border = "1px solid #bdbdbd";
  };

  shortDescription.onfocus = function () {
    shortDescription.style.border = "1px solid #bdbdbd";
  };

  description.onfocus = function () {
    description.style.border = "1px solid #bdbdbd";
  };

  imageAltText.onfocus = function () {
    imageAltText.style.border = "1px solid #bdbdbd";
  };

  if (checkLength(title.value, 4)) {
    titleError.style.display = "none";
    title.style.border = "1px solid #bdbdbd";
  } else {
    titleError.style.display = "block";
    title.style.border = "2px solid #ed553b";
  }
  // if (checkLength(price.value, 2)) {
  //   priceError.style.display = "none";
  // } else {
  //   priceError.style.display = "block";
  // }
  if (checkLength(shortDescription.value, 9)) {
    shortDescriptionError.style.display = "none";
    shortDescription.style.border = "1px solid #bdbdbd";
  } else {
    shortDescriptionError.style.display = "block";
    shortDescription.style.border = "2px solid #ed553b";
  }

  if (checkLength(description.value, 14)) {
    descriptionError.style.display = "none";
    description.style.border = "1px solid #bdbdbd";
  } else {
    descriptionError.style.display = "block";
    description.style.border = "2px solid #ed553b";
  }

  // if (checkLength(productImage.value, 10)) {
  //   urlError.style.display = "none";
  // } else {
  //   urlError.style.display = "block";
  // }

  if (checkLength(imageAltText.value, 9)) {
    altTextError.style.display = "none";
    imageAltText.style.border = "2px solid transparent";
  } else {
    altTextError.style.display = "block";
    imageAltText.style.border = "2px solid #ed553b";
  }

  if (
    checkLength(title.value, 4) &&
    checkLength(shortDescription.value, 9) &&
    checkLength(description.value, 14) &&
    checkLength(imageAltText.value, 9)
  ) {
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
}
