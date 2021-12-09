import { getExistingBasket, saveBasket } from "../utils/storage.js";

const basketContainer = document.querySelector(".basket__list");

export function renderBasket(basket) {
  basket.forEach((item) => {
    const total = item.price * item.quantity;

    basketContainer.innerHTML += `
      <li class="basket__item">
                  <div class="basket__image">
                    <img
                      src="${item.image}"
                      alt=""
                      class="basket__image"
                    />
                  </div>
                  <div class="basket__content">
                    <h3 class="basket__title">
                      <a href="products-details.html?id=${item.id}" class="basket__link">${item.title}</a>
                    </h3>
                    <table class="basket__table">
                    <tr>
                        <th scope="row">Gender:</th>
                        <td>Unisex</td>
                      </tr>
                      <tr>
                      <tr>
                        <th scope="row">Color:</th>
                        <td>${item.color}</td>
                      </tr>
                      <tr>
                        <th scope="row">Size:</th>
                        <td>${item.size}</td>
                      </tr>
                      <tr>
                        <th scope="row">Price:</th>
                        <td>$${item.price}</td>
                      </tr>
                      <tr>
                        <th scope="row">Quantity:</th>
                        <td>
                        ${item.quantity}</td>
                      </tr>
                      <tr id="total">
                        <th scope="row">Total:</th>
                        <td>
                        $${total}</td>
                      </tr>
                    </table>
                  </div>
                  <svg style="width: 24px; height: 24px" viewBox="0 0 24 24" class="remove-icon" data-id="${item.id}">
                    <path
                      fill="currentColor"
                      d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z"
                    />
                  </svg>
                </li>`;

    
  });
}
