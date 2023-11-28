import slider from "../components/sliders/featSlider.js";

const sliderContainer = document.querySelector(".slider");
const indicatorContainer = document.querySelector(".indicator-container");
const sliderControls = document.querySelector(".slider__controls");
const loader = document.querySelector(".slider-loader")

export function renderFeaturedProducts(products) {
  sliderContainer.innerHTML = "";
  indicatorContainer.style.display = "flex";
  sliderControls.style.display = "flex";
  loader.style.display = "block"
  

  const featuredProducts = products.filter(function (product) {
    if (product.attributes.featured) {
      return true;
    }
  });

  featuredProducts.forEach((product) => {
    sliderContainer.innerHTML += `
      <a href="products-details.html?id=${product.id}" class="slide">
        <div class="slide__image-container">
          <img src="${product.attributes.image_url}" alt="${
      product.attributes.image_alt_text
    }" 
            class="slide__image" />
        </div>
        <div class="slide__body">
          <h4 class="slide__title">${product.attributes.title}</h4>
          <p class="slide__price">$${product.attributes.price.toFixed(2)}</p>
        </div>
      </a>`;
  });
  
  slider();
}
