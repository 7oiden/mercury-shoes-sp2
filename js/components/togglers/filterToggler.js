const sortIcon = document.querySelector(".sort-icon");
const searchIcon = document.querySelector(".search-icon");
const sortForm = document.querySelector("#sort-form");
const searchForm = document.querySelector("#search-form");

export function filterToggler() {
  function toggleSort() {
    if (sortForm.style.display === "block") {
      sortForm.style.display = "none";
    } else {
      sortForm.style.display = "block";
    }

    if (searchForm.style.display === "block") {
      searchForm.style.display = "none";
    }
  }

  sortIcon.addEventListener("click", toggleSort);

  function toggleSearch() {
    console.log("hi");
    if (searchForm.style.display === "block") {
      searchForm.style.display = "none";
    } else {
      searchForm.style.display = "block";
    }

    if (sortForm.style.display === "block") {
        sortForm.style.display = "none";
      }
  }

  searchIcon.addEventListener("click", toggleSearch);
}
