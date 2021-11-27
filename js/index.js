import { mobileToggler } from "./components/dropdownTogglers.js";
import { adminToggler } from "./components/dropdownTogglers.js";
import { productsUrl } from "./settings/api.js";
import displayAlert from "./components/common/displayAlert.js";
import { renderFeaturedProducts } from "./ui/renderFeaturedProducts.js";

(async function fetchApi() {
  try {
    const response = await fetch(productsUrl);
    const json = await response.json();

    console.log(json);

    renderFeaturedProducts(json);
    

  } catch (error) {
    displayAlert(
      "alert error",
      "An error has occured when trying to fetch the API",
      ".featured__grid"
    );
  }
})();

// const productsUrl = baseUrl + "products";

// (async function () {
//   const featuredContainer = document.querySelector(".featured__grid");

//   try {
//     const response = await fetch(productsUrl);
//     const json = await response.json();

//     console.log(json);

//     featuredContainer.innerHTML = "";

//     json.forEach((product) => {
//       const imgUrl = "http://localhost:9000" + product.image.url;

//       function renderFeatured() {
//         if (product.featured) {
//           featuredContainer.innerHTML += `
//         <a href="products-details.html?id=${product.id}" class="card">
//         <img src="${imgUrl}" alt="${
//             product.image.alternativeText
//           }" class="card-image" />
//         <div class="card-body">
//         <h6 class="card-title">${product.title}</h6>
//         <p class="card-price">$${product.price.toFixed(2)}</p>
//         <p class="card-text">${product.short_description}</p>
//         </div>
//     </a>`;
//         }
//       }

//       renderFeatured();

//     });
//   } catch (error) {
//     //console.log(error);
//     displayAlert("alert error", error, ".featured__grid");
//   }
// })();
