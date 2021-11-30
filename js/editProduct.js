import { mobileToggler } from "./components/dropdownTogglers.js";
import createAdminNav from "./components/common/createAdminNav.js";
import { getToken } from "./utils/storage.js";
import displayAlert from "./components/common/displayAlert.js";
import { baseUrl } from "./settings/api.js";

const alertContainer = document.querySelector(".editalert-container");

const token = getToken();

createAdminNav();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
  document.location.href = "/";
}

const productUrl = baseUrl + "products/" + id;

const editForm = document.querySelector(".edit__form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const shortDescription = document.querySelector("#short-description");
const description = document.querySelector("#description");
const productImage = document.querySelector("#product-image");
const imageAltText = document.querySelector("#image-alt-text");
const loader = document.querySelector(".loader");

const idInput = document.querySelector("#id");

if (!token) {
  setInterval(function () {
    document.location = "/";
  }, 1500);

  displayAlert(
    "warning",
    "Please sign in order to edit articles",
    ".edit-form"
  );

  loader.style.display = "none";
} else {
  (async function () {
    
    try {
      const response = await fetch(productUrl);
      const details = await response.json();

      console.log(details);

      console.log(details.featured);

      title.value = details.title;
      price.value = details.price;
      shortDescription.value = details.short_description;
      description.value = details.description;
      idInput.value = details.id;

      deleteButton(details.id);
    } catch (error) {
      displayAlert("error", error, ".alert-container");
      //console.log(error);
    } finally {
      loader.style.display = "none";
    }
  })();
}

//////////////////////////////////////////

editForm.addEventListener("submit", submitEditForm);

function submitEditForm(event) {
  event.preventDefault();

  console.log("hi");

  alertContainer.innerHTML = "";

  const idValue = idInput.value;
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

  if (
    titleValue.length === 0 ||
    isNaN(priceValue) ||
    shortDescriptionValue.length === 0 ||
    descriptionValue.length === 0
  ) {
    return displayAlert(
      "alert warning",
      "Please add tile, author and summary before updating",
      ".editalert-container"
    );
  }

  updateProduct(
    titleValue,
    priceValue,
    shortDescriptionValue,
    descriptionValue,
    productImageValue,
    imageAltTextValue,
    featuredValue,
    stockValue,
    idValue,
  );
}

async function updateProduct(title, price, short_description, description, image_url, image_alt_text, featured, stock, id) {
   
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

  const editData = JSON.stringify(jsonData);

  const token = getToken();

  console.log(editData);

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
        alertContainer.innerHTML = "";
      }, 2000);
    }

    if (json.error) {
      displayAlert("error", json.message, ".alert-container");
    }
  } catch (error) {
    displayAlert("error", "Something went wrong!", ".alert-container");
  }
}
