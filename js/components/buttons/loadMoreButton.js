export default function loadMoreItems(items) {
  const productCards = document.querySelectorAll(".card__container");
  const loadButton = document.querySelector("#load-button");

  let num = 8;

  for (let i = 0; i < productCards.length; i++) {
    if (i < num) {
      productCards[i].classList.remove("remove-card");
    }
  }

  if (items.length <= 8) {
    loadButton.style.display = "none";
  } else {
    loadButton.style.display = "block";
  }

  loadButton.onclick = function () {
    num = num + 8;

    for (let i = 0; i < productCards.length; i++) {
      if (i < num) {
        productCards[i].classList.remove("remove-card");
      }

      if (num >= productCards.length) {
        loadButton.style.display = "none";
      }
    }
  };
}
