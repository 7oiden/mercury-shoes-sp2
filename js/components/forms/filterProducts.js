import { renderProducts } from "../../ui/renderProducts.js";

export function filterProducts(products) {

  const filterInput = document.querySelector("#filter-select");
  const sortIcon = document.querySelector("#sort-icon");
  const searchForm = document.querySelector("#search-form");
  const filterForm = document.querySelector("#filter-form");

  sortIcon.onclick = function () {
    renderProducts(products);
    searchForm.reset();
    filterForm.reset();
  };

  filterInput.onchange = function (event) {
    searchForm.reset();
    const filterValue = event.target.value;

    let sortedProducts = products;

    if (filterValue === "default") {
      sortedProducts = products.sort(
        (a, b) =>
          new Date(b.publishedAt) -
          new Date(a.publishedAt)
      );
    }

    if (filterValue === "feat") {
      sortedProducts = products.filter(function (product) {
        if (product.featured === true) {
          return true;
        }
      });
    }

    if (filterValue === "in-stock") {
      sortedProducts = products.filter(function (product) {
        if (product.stock === true) {
          return true;
        }
      });
    }

    if (filterValue === "out-of-stock") {
      sortedProducts = products.filter(function (product) {
        if (product.stock === false) {
          return true;
        }
      });
    }

    renderProducts(sortedProducts);
  };
}
