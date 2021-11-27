const productsContainer = document.querySelector(".products__grid");

export function renderProducts(products) {
  console.log(products);

  productsContainer.innerHTML = "";

  products.forEach((product) => {
    const imgUrl = "http://localhost:9000" + product.image.url;

    productsContainer.innerHTML += `
        <a href="products-details.html?id=${product.id}" class="card">
        <img src="${imgUrl}" alt="${product.image.alternativeText}" 
        class="card-image" />
        <div class="card-body">
        <h6 class="card-title">${product.title}</h6>
        <p class="card-price">$${product.price.toFixed(2)}</p>
        <p class="card-text">${product.short_description}</p>
        </div>
        </a>`;
  });
}
