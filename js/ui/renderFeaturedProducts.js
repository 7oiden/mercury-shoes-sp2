const featuredContainer = document.querySelector(".featured__grid");

export function renderFeaturedProducts(products) {
  console.log(products);

  featuredContainer.innerHTML = "";

  const featuredProducts = products.filter(function (product) {
    if (product.featured) {
      return true;
    }
  });

  featuredProducts.forEach((product) => {
    let imgUrl = product.image_url;

    if (product.image) {
      imgUrl = "http://localhost:9000" + product.image.url;
    }

    let altText = product.image_alt_text;

    if (product.image.alternativeText) {
      altText = product.image.alternativeText;
    }

    featuredContainer.innerHTML += `
        <a href="products-details.html?id=${product.id}" class="card">
        <img src="${imgUrl}" alt="${altText}" 
        class="card-image" />
        <div class="card-body">
        <h6 class="card-title">${product.title}</h6>
        <p class="card-price">$${product.price.toFixed(2)}</p>
        <p class="card-text">${product.short_description}</p>
        </div>
        </a>`;
  });
}
