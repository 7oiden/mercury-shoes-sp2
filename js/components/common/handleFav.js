import { getExistingFavs, saveFavs } from "../../utils/storage.js";

export default function handleFav() {
  const favIcons = document.querySelectorAll(".fa-heart");

  favIcons.forEach((icon) => {
    icon.addEventListener("click", handleFavClick);
  });

  function handleFavClick(event) {
    event.stopPropagation();
    this.classList.toggle("fas");
    this.classList.toggle("far");

    if (this.classList.contains("fas")) {
      this.setAttribute("title", "Remove favorite");
      this.classList.add("heart");
    } else if (this.classList.contains("far")) {
      this.setAttribute("title", "Add favorite");
      this.classList.remove("heart");
    }

    const id = this.dataset.id;
    const image = this.dataset.image;
    const title = this.dataset.title;
    const price = this.dataset.price;
    const description = this.dataset.description;

    const currentFavs = getExistingFavs();

    const productInStorage = currentFavs.find((fav) => {
      return fav.id === id;
    });

    if (!productInStorage) {
      const product = {
        id: id,
        image: image,
        title: title,
        image: image,
        price: price,
        description: description,
      };
      currentFavs.push(product);
      saveFavs(currentFavs);
    } else {
      const newFavs = currentFavs.filter((fav) => {
        return fav.id !== id;
      });
      saveFavs(newFavs);
    }
  }
}
