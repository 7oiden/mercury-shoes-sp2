import { renderProducts } from "../../ui/renderProducts.js";

export function filterProducts(products) {
  const filterInput = document.querySelector("#filter-select");
  const sortIcon = document.querySelector("#sort-icon");
  const searchForm = document.querySelector("#search-form");

  sortIcon.onclick = function () {
    renderProducts(
      products.sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
    );
    searchForm.reset();
  };

  filterInput.onchange = function (event) {
    const filterValue = event.target.value;

    // console.log(filterValue);

    let sortedProducts = [];

    if (filterValue === "price-asc") {
      sortedProducts = products.sort((a, b) => a.price - b.price);
    }

    if (filterValue === "price-desc") {
      sortedProducts = products.sort((a, b) => b.price - a.price);
    }

    if (filterValue === "date-asc") {
      sortedProducts = products.sort(
        (a, b) => new Date(a.created_at) - new Date(b.created_at)
      );
    }

    if (filterValue === "date-desc") {
      sortedProducts = products.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
    }

    if (filterValue === "default") {
      sortedProducts = products.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
    }

    if (filterValue === "feat") {
      sortedProducts = products.filter(function (product) {
        if (product.featured === true) {
          return true;
        }
      });
    }

    if (filterValue === "stock") {
      sortedProducts = products.filter(function (product) {
        if (product.stock === true) {
          return true;
        }
      });
    }

    renderProducts(sortedProducts);
  };
}
