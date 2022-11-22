const modal = document.querySelector(".modal");
const modalImage = document.querySelector(".modal__content");

export default function imageModal(details) {
  const modal = document.querySelector(".modal");
  const modalImage = document.querySelector(".modal__content");

  function openModal(event) {
    if (event.target.matches(".details__image")) {
      modal.style.display = "block";
      modalImage.src = `${details.image_url}`;
      document.body.style.position = "fixed";
    } else if (
      !event.target.matches(".modal__content") &&
      modal.style.display === "block"
    ) {
      event.preventDefault();
      event.stopPropagation();
      document.body.style.position = "static";
      modal.style.display = "none";
    }
  }

  document.addEventListener("click", openModal);
}
