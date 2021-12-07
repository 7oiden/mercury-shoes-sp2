import { mobileToggler } from "./components/dropdownTogglers.js";
import createAdminNav from "./components/common/createAdminNav.js";
import { getToken } from "./utils/storage.js";
import displayAlert from "./components/common/displayAlert.js";
import { baseUrl } from "./settings/api.js";
import deleteButton from "./components/editProducts/deleteButton.js";
import { basketCounter } from "./components/common/basketCounter.js";

basketCounter();

const alertContainer = document.querySelector(".editalert-container");

createAdminNav();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

// if (!id) {
//   document.location.href = "/";
// }

const productUrl = baseUrl + "products/" + id;

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

const titleError = document.querySelector("#edit-title-error");
const priceError = document.querySelector("#edit-price-error");
const colorError = document.querySelector("#edit-color-error");
const shortDescriptionError = document.querySelector(
  "#edit-short-description-error"
);
const descriptionError = document.querySelector("#edit-description-error");
const urlError = document.querySelector("#edit-url-error");
const altTextError = document.querySelector("#edit-alt-text-error");

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
    /////
    // if (details.image) {
    //   imageAltText.value = details.image.alternativeText;
    // } else {
    //   imageAltText.value = details.image_alt_text;
    // }

    const test = details.image_url;
 
    title.value = details.title;
    price.value = details.price;
    color.value = details.color
    shortDescription.value = details.short_description;
    description.value = details.description;
    productImage.value = test.substring("https://".length);
    imageAltText.value = details.image_alt_text;
    idInput.value = details.id;

    deleteButton(details.id);
  } catch (error) {
    displayAlert("error", error, ".alert-container");
    //console.log(error);
  } finally {
    loader.style.display = "none";
  }
})();

//////////////////////////////////////////

editForm.addEventListener("submit", submitEditForm);

function submitEditForm(event) {
  event.preventDefault();

  console.log("hi");

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
  function checkLength(value, len) {
    if (value.trim().length > len) {
      return true;
    } else {
      return false;
    }
  }

  function validateNumber(priceValue) {
    const regEx = /^-?\d+\.?\d*$/;
    const patternMatches = regEx.test(priceValue);
    return patternMatches;
  }

  function checkInput() {
    if (checkLength(title.value, 4)) {
      titleError.style.display = "none";
    } else {
      titleError.style.display = "block";
    }

    if (validateNumber(price.value)) {
      priceError.style.display = "none";
    } else {
      priceError.style.display = "block";
    }

    if (checkLength(color.value, 2)) {
      colorError.style.display = "none";
    } else {
      colorError.style.display = "block";
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

    if (checkLength(productImage.value, 4)) {
      urlError.style.display = "none";
    } else {
      urlError.style.display = "block";
    }

    if (checkLength(imageAltText.value, 9)) {
      altTextError.style.display = "none";
    } else {
      altTextError.style.display = "block";
    }
  }

  title.addEventListener("keyup", checkInput);
  price.addEventListener("keyup", checkInput);
  color.addEventListener("keyup", checkInput);
  shortDescription.addEventListener("keyup", checkInput);
  description.addEventListener("keyup", checkInput);
  productImage.addEventListener("keyup", checkInput);
  imageAltText.addEventListener("keyup", checkInput);

  title.onfocus = function () {
    title.style.border = "1px solid #bdbdbd";
  };

  price.onfocus = function () {
    price.style.border = "1px solid #bdbdbd";
  };

  color.onfocus = function () {
    color.style.border = "1px solid #bdbdbd";
  };

  shortDescription.onfocus = function () {
    shortDescription.style.border = "1px solid #bdbdbd";
  };

  description.onfocus = function () {
    description.style.border = "1px solid #bdbdbd";
  };

  productImage.onfocus = function () {
    productImage.style.border = "1px solid #bdbdbd";
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
  if (validateNumber(price.value)) {
    priceError.style.display = "none";
    price.style.border = "1px solid #bdbdbd";
  } else {
    priceError.style.display = "block";
    price.style.border = "2px solid #ed553b";
  }
   if (checkLength(color.value, 2)) {
     coloreError.style.display = "none";
     color.style.border = "1px solid #bdbdbd";
   } else {
     colorError.style.display = "block";
     color.style.border = "2px solid #ed553b";
   }
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

  // if (checkLength(productImage.value, 4)) {
  //   urlError.style.display = "none";
  //   productImage.style.border = "1px solid #bdbdbd";
  // } else {
  //   urlError.style.display = "block";
  //   productImage.style.border = "2px solid #ed553b";
  // }

  // if (checkLength(imageAltText.value, 9)) {
  //   altTextError.style.display = "none";
  //   imageAltText.style.border = "2px solid transparent";
  // } else {
  //   altTextError.style.display = "block";
  //   imageAltText.style.border = "2px solid #ed553b";
  // }

  if (
    checkLength(title.value, 4) &&
    checkLength(color.value, 4) &&
    checkLength(shortDescription.value, 9) &&
    checkLength(description.value, 14) &&
    validateNumber(price.value)
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

    const token = getToken();

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
          history.back();
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
