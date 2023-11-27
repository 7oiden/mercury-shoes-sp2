import { renderProducts } from "../../ui/renderProducts.js";

export function sortProducts(products) {

  const sortInput = document.querySelector("#sort-select");
  const filterIcon = document.querySelector("#filter-icon");
  const searchForm = document.querySelector("#search-form");
  const sortForm = document.querySelector("#sort-form");

  filterIcon.onclick = function () {
    renderProducts(products);
    searchForm.reset();
    sortForm.reset();
  };

  sortInput.onchange = function (event) {
    searchForm.reset();
    const sortValue = event.target.value;

    let sortedProducts = products;

    if (sortValue === "price-asc") {
      sortedProducts = products.sort((a, b) => a.price - b.price);
    }

    if (sortValue === "price-desc") {
      sortedProducts = products.sort((a, b) => b.price - a.price);
    }

    if (sortValue === "date-asc") {
      sortedProducts = products.sort(
        (a, b) => new Date(a.created_at) - new Date(b.created_at)
      );
    }

    if (sortValue === "date-desc") {
      sortedProducts = products.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
    }

    if (sortValue === "default") {
      sortedProducts = products.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
    }

    renderProducts(sortedProducts);
  };
  renderProducts(products);
}
