import { renderProducts } from "./renderProducts.js";

export function searchProducts(products) {
  const searchInput = document.querySelector(".search__input");

  searchInput.onkeyup = function (event) {
    const searchValue = event.target.value.trim().toLowerCase();

    // console.log(searchValue);

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
