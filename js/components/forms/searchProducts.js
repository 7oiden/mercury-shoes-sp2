import { renderProducts } from "../../ui/renderProducts.js";

export function searchProducts(products) {
  const searchInput = document.querySelector("#search-input");
  const searchIcon = document.querySelector("#search-icon");
  const sortForm = document.querySelector("#sort-form");

  searchIcon.onclick = function () {
    renderProducts(products);
    sortForm.reset();
  };

  searchInput.onkeyup = function (event) {
    sortForm.reset();
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
