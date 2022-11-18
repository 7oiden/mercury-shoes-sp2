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
    sectionIndex = sectionIndex < 3 ? sectionIndex + 1 : 3;
    document.querySelector(".selected").classList.remove("selected");
    indicatorParents.children[sectionIndex].classList.add("selected");
    slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
  });

  // featuredProducts.forEach((product) => {
  //   featuredContainer.innerHTML += `
  //   <div class="card__container">
  //     <a href="products-details.html?id=${product.id}" class="card">
  //       <div class="card__image-container">
  //         <img src="${product.image_url}" alt="${product.image_alt_text}"
  //           class="card__image" />
  //       </div>
  //       <div class="card__body">
  //         <div class="card__header-wrapper">
  //           <h4 class="card__title">${product.title}</h4>
  //           <div class="card__icon-container">
  //             <svg aria-hidden="true" class="card__icon" viewBox="0 0 24 24">
  //               <path fill="currentColor" d="M14.5,7.66L20.64,6.97L17,12L20.68,16.97L14.5,16.32L12.03,22L9.5,16.34L3.36,17.03L7,12L3.32,7.03L9.5,7.68L11.97,2L14.5,7.66Z" />
  //             </svg></div>
  //         </div>
  //         <p class="card__price">$${product.price.toFixed(2)}</p>
  //         <p class="card__text">${product.short_description}</p>
  //       </div>
  //     </a>
  //   </div>`;
  // });
}
