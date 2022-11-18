const sliderContainer = document.querySelector(".slider");

export function renderFeaturedProducts(products) {
  sliderContainer.innerHTML = "";

  const featuredProducts = products.filter(function (product) {
    if (product.featured) {
      return true;
    }
  });

  featuredProducts.forEach((product) => {
    sliderContainer.innerHTML += `
      <a href="products-details.html?id=${product.id}" class="slide">
        <div class="slide__image-container">
          <img src="${product.image_url}" alt="${product.image_alt_text}" 
            class="slide__image" />
        </div>
        <div class="slide__body">
          <h4 class="slide__title">${product.title}</h4>
          <p class="slide__price">$${product.price.toFixed(2)}</p>
        </div>
      </a>`;
  });

  const slider = document.querySelector(".slider");
  const leftArrow = document.querySelector("#left");
  const rightArrow = document.querySelector("#right");
  const indicatorParents = document.querySelector(".indicator-container");

  let sectionIndex = 0;

  document.querySelectorAll(".indicator").forEach(function (indicator, index) {
    indicator.addEventListener("click", function () {
      sectionIndex = index;
      document.querySelector(".selected").classList.remove("selected");
      indicator.classList.add("selected");
      slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
    });
  });

  leftArrow.addEventListener("click", function () {
    sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
    document.querySelector(".selected").classList.remove("selected");
    indicatorParents.children[sectionIndex].classList.add("selected");
    slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
  });

  rightArrow.addEventListener("click", function () {
    if (window.innerWidth < 768) {
      sectionIndex = sectionIndex < 3 ? sectionIndex + 1 : 3;
    } else {
      sectionIndex = sectionIndex < 2 ? sectionIndex + 1 : 2;
    }
    document.querySelector(".selected").classList.remove("selected");
    indicatorParents.children[sectionIndex].classList.add("selected");
    slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
  });
}
