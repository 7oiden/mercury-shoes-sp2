import { renderProducts } from "./renderProducts.js";

export function filterProducts(products) {
  const filterInput = document.querySelector("#filter-select");
  // const filterIcon = document.querySelector(".filter-icon");
  // const filterForm = document.querySelector("#filter-form");

  console.log(products);

  //   filterIcon.onclick = function () {
  //     if (filterForm.style.display === "block") {
  //       filterForm.style.display = "none";
  //     } else {
  //       filterForm.style.display = "block";
  //     }
  //   };

  filterInput.onchange = function (event) {
    const filterValue = event.target.value;

    console.log(filterValue);

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

    renderProducts(sortedProducts);
  };
}
