const sortIcon = document.querySelector("#sort-icon");
const filterIcon = document.querySelector("#filter-icon")
const sortForm = document.querySelector("#sort-form");
const filterForm = document.querySelector("#filter-form");

export function filterToggler() {
  function toggleSortForm() {
    sortForm.classList.toggle("hide");
    sortForm.classList.toggle("show");
    filterForm.classList.add("hide");
    sortIcon.classList.toggle("show");
    sortIcon.classList.toggle("hide");
    filterIcon.classList.toggle("hide");
    filterIcon.classList.toggle("show");
  }

  sortIcon.addEventListener("click", toggleSortForm);

  function toggleFilterForm() {
    filterForm.classList.toggle("hide");
    filterForm.classList.toggle("show");
    sortForm.classList.add("hide");
    sortIcon.classList.toggle("hide");
    sortIcon.classList.toggle("show");
    filterIcon.classList.toggle("show");
    filterIcon.classList.toggle("hide"); 
  }

  filterIcon.addEventListener("click", toggleFilterForm);
}

