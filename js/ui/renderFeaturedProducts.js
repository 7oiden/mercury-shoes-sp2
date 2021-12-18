const featuredContainer = document.querySelector(".featured__grid");

export function renderFeaturedProducts(products) {
  // console.log(products);

  featuredContainer.innerHTML = "";

  const featuredProducts = products.filter(function (product) {
    if (product.featured) {
      return true;
    }
  });

  featuredProducts.forEach((product) => {
    featuredContainer.innerHTML += `
    <div class="card__container">
      <a href="products-details.html?id=${product.id}" class="card">
        <div class="card__image-container">
          <img src="${product.image_url}" alt="${product.image_alt_text}" 
            class="card__image" />
        </div>
        <div class="card__body">
          <div class="card__header-wrapper"> 
            <h4 class="card__title">${product.title}</h4>
            <div class="card__icon-container">
              <svg class="card__icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M14.5,7.66L20.64,6.97L17,12L20.68,16.97L14.5,16.32L12.03,22L9.5,16.34L3.36,17.03L7,12L3.32,7.03L9.5,7.68L11.97,2L14.5,7.66Z" />
              </svg></div>
          </div>
          <p class="card__price">$${product.price.toFixed(2)}</p>
          <p class="card__text">${product.short_description}</p>
        </div>
      </a>
    </div>`;
  });
}
