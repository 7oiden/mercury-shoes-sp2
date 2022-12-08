import { renderProducts } from "../../ui/renderProducts.js";

export function searchProducts(products) {
  const searchInput = document.querySelector("#search-input");
  const sortForm = document.querySelector("#sort-form");
  const filterForm = document.querySelector("#filter-form");

  searchInput.onkeyup = function (event) {
    sortForm.reset();
    filterForm.reset();
    const searchValue = event.target.value.trim().toLowerCase();

    const filteredProducts = products.filter(function (product) {
      if (
        product.title.toLowerCase().includes(searchValue) ||
        product.short_description.toLowerCase().includes(searchValue) ||
        product.title.toLowerCase().startsWith(searchValue) ||
        product.short_description.toLowerCase().startsWith(searchValue)
      ) {
        return true;
      }
    });

    renderProducts(filteredProducts);
  };
}
