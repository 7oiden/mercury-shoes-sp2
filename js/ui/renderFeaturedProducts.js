import slider from "./slider.js";

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
  slider()
}
