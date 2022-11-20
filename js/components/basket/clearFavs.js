export function clearFavs() {
    const clearButton = document.querySelector("#clear-favorites");
    const favsList = document.querySelector(".favorites__list");
  
    clearButton.addEventListener("click", clearFavsList);
  
    function clearFavsList() {
      if (confirm("Are you sure you want to clear all items from favorites list?")) {
        localStorage.removeItem("favorites");
        favsList.innerHTML = `<li class="basket__list--empty">Your favorite list is now empty...</li>`;
        clearButton.style.display = "none";
  
        setTimeout(function () {
          document.location.href = "products-overview.html";
        }, 1500);
      } 
    }
  }