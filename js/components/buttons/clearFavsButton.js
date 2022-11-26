export function clearFavsButton() {
    const clearButton = document.querySelector("#clear-favorites");
    const favsList = document.querySelector(".favorites__list");
    const headingContainer = document.querySelector(".fav__heading-container")
  
    clearButton.addEventListener("click", clearFavsList);
  
    function clearFavsList() {
      if (confirm("Are you sure you want to clear all items from favorites list?")) {
        localStorage.removeItem("favorites");
        headingContainer.innerHTML = `<h1 class="about__heading" id="about">Favorites</h1>`
        favsList.innerHTML = `<li class="favorites__list--empty">Your favorite list is empty...</li>`;
        clearButton.style.display = "none";
  
        setTimeout(function () {
          document.location.href = "products-overview.html";
        }, 1500);
      } 
    }
  }