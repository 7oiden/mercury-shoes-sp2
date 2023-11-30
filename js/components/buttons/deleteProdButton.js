import { baseUrl } from "../../settings/api.js";
import { getToken } from "../../utils/storage.js";
import displayAlert from "../alerts/displayAlert.js";
import {
  getExistingBasket,
  saveBasket,
  getExistingFavs,
  saveFavs,
} from "../../utils/storage.js";
import { basketCounter } from "../common/basketCounter.js";

export default function deleteProdButton(id) {
  const deleteContainer = document.querySelector(".delete-container");

  deleteContainer.innerHTML = `<button type="button" class="button delete-button">Delete product</button>`;

  const deleteButton = document.querySelector(".delete-button");

  deleteButton.onclick = async function () {
    const performDelete = confirm(
      "This will permanently delete this product, are you sure?"
    );

    if (performDelete) {
      const url = baseUrl + "products/" + id;

      const token = getToken();

      console.log(id);

      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await fetch(url, options);
        const json = await response.json();

        if (!json.error) {
          //removes deleted article from basket
          const currentBasket = getExistingBasket();

          const newBasket = currentBasket.filter((item) => {
            return item.id !== id;
          });

          saveBasket(newBasket);

          basketCounter();

          //removes deleted article from favorites
          const currentFavs = getExistingFavs();
          const newFavs = currentFavs.filter((item) => {
            return item.id !== id;
          });

          saveFavs(newFavs);

          displayAlert(
            "success",
            "Product successfully deleted",
            ".edit-alert-container"
          );

          setTimeout(function () {
            document.location.href = "products-overview.html";
          }, 2000);
        }

        if (json.error) {
          displayAlert("error", json.message, ".edit-alert-container");
        }
      } catch (error) {
        displayAlert("error", "Something went wrong!", ".edit-alert-container");
      }
    }
  };
}
