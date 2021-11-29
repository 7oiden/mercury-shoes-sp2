import { mobileToggler } from "./components/dropdownTogglers.js";
import createAdminNav from "./components/common/createAdminNav.js";
import { getToken } from "./utils/storage.js";
import { productsUrl } from "./settings/api.js";
import displayAlert from "./components/common/displayAlert.js";
import { renderFeaturedProducts } from "./ui/renderFeaturedProducts.js";

const token = getToken();

createAdminNav();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

// if (!id) {
//   document.location.href = "/";
// }

const editForm = document.querySelector(".edit__form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const shortDescription = document.querySelector("#short-description");
const description = document.querySelector("#description");
const productImage = document.querySelector("#product-image");
const imageAltText = document.querySelector("#image-alt-text");
const loader = document.querySelector(".loader");

if (!token) {
  setInterval(function () {
    document.location = "/";
  }, 1500);

  displayAlert(
    "warning",
    "Please sign in order to edit articles",
    ".edit-form"
  );

//   loader.style.display = "none";
} else {
  (async function () {

    const productUrl = productsUrl + "/" + id;

    try {
      const response = await fetch(productUrl);
      const details = await response.json();

      console.log(details);

      console.log(details.featured);

      title.value = details.title;
      price.value = details.price;
      shortDescription.value = details.short_description;
      description.value = details.description;
      featured.value = details.featured;
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
//   editForm.addEventListener("submit", submitEditForm);

//   function submitEditForm(event) {
//     event.preventDefault();

//     alertContainer.innerHTML = "";

//     const idValue = idInput.value;
//     const titleInput = title.value.trim();
//     const authorInput = author.value.trim();
//     const summaryInput = summary.value.trim();

//     if (
//       titleInput.length === 0 ||
//       authorInput.length === 0 ||
//       summaryInput.length === 0
//     ) {
//       return displayAlert(
//         "alert warning",
//         "Please add tile, author and summary before updating",
//         ".alert-container"
//       );
//     }

//     updateArticle(idValue, titleInput, authorInput, summaryInput);
//   }

//   async function updateArticle(id, title, author, summary) {
//     //updates current article in favorites list
//     const currentFavs = getExistingFavs();

//     const articleInStorage = currentFavs.find((fav) => {
//       return fav.id === id;
//     });

//     if (articleInStorage) {
//       const articleIndex = currentFavs.findIndex((fav) => {
//         return fav.id === id;
//       });

//       if (id) {
//         currentFavs[articleIndex].id = id;
//         currentFavs[articleIndex].title = title;
//         currentFavs[articleIndex].author = author;
//         currentFavs[articleIndex].summary = summary;

//         saveFavs(currentFavs);
//       }
//     }

//     const editData = JSON.stringify({
//       title: title,
//       author: author,
//       summary: summary,
//     });

//     const options = {
//       method: "PUT",
//       body: editData,
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     };

//     try {
//       const response = await fetch(productUrl, options);
//       const json = await response.json();

//       if (json.updated_at) {
//         displayAlert(
//           "success",
//           "Article successfully updated",
//           ".alert-container"
//         );

//         setTimeout(function () {
//           alertContainer.innerHTML = "";
//         }, 1500);
//       }

//       if (json.error) {
//         displayAlert("error", json.message, ".alert-container");
//       }
//     } catch (error) {
//       displayAlert("error", "Something went wrong!", ".alert-container");
//     }
//   }
// }
