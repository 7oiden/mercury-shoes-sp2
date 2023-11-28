import { renderProducts } from "../../ui/renderProducts.js";

export function searchProducts(products) {
 
  const searchInput = document.querySelector("#search-input");
  const sortForm = document.querySelector("#sort-form");
  const filterForm = document.querySelector("#filter-form");

  const searchForm = document.querySelector("#search-form");

  let searchValue = "";
  let filteredProducts = [];

  searchInput.onkeyup = function (event) {
    sortForm.reset();
    filterForm.reset();
    searchValue = event.target.value.trim().toLowerCase();

    filteredProducts = products.filter(function (product) {
      if (
        product.attributes.title.toLowerCase().includes(searchValue) ||
        product.attributes.short_description
          .toLowerCase()
          .includes(searchValue) ||
        product.attributes.title.toLowerCase().startsWith(searchValue) ||
        product.attributes.short_description
          .toLowerCase()
          .startsWith(searchValue)
      ) {
        return true;
      }
    });

    renderProducts(filteredProducts);
  };

  function submitSearchForm(event) {
    event.preventDefault();

    searchValue = searchInput;

    filteredProducts = products.filter(function (product) {
      if (
        product.attributes.title.toLowerCase().includes(searchValue) ||
        product.attributes.short_description
          .toLowerCase()
          .includes(searchValue) ||
        product.attributes.title.toLowerCase().startsWith(searchValue) ||
        product.attributes.short_description
          .toLowerCase()
          .startsWith(searchValue)
      ) {
        return true;
      }
    });
    renderProducts(filteredProducts);
  }

  searchForm.addEventListener("submit", submitSearchForm);
}
