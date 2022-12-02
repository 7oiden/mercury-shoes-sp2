const sortIcon = document.querySelector("#sort-icon");
const searchIcon = document.querySelector("#search-icon");
const sortForm = document.querySelector("#sort-form");
const searchForm = document.querySelector("#search-form");

export function filterToggler() {
  function toggleSortForm() {
    sortForm.classList.toggle("show");
    sortForm.classList.toggle("hide");
    searchForm.classList.add("hide");
    sortIcon.classList.toggle("hide");
    sortIcon.classList.toggle("show");
    searchIcon.classList.toggle("show");
    searchIcon.classList.toggle("hide");
  }

  sortIcon.addEventListener("click", toggleSortForm);

  function toggleSearchForm() {
    searchForm.classList.toggle("show");
    searchForm.classList.toggle("hide");
    sortForm.classList.add("hide");
    sortIcon.classList.toggle("show");
    sortIcon.classList.toggle("hide");
    searchIcon.classList.toggle("hide");
    searchIcon.classList.toggle("show");
  }

  searchIcon.addEventListener("click", toggleSearchForm);
}
