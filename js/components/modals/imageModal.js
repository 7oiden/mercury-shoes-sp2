export default function imageModal() {
  const modal = document.querySelector(".modal");
  const modalImage = document.querySelector(".modal__content img");

  function openModal(event) {
    const imageUrl = event.target.src;

    const showModal = function () {
      modal.style.display = "block";
      modalImage.src = imageUrl;
      document.body.style.position = "fixed";
    };

    const hideModal = function () {
      event.preventDefault();
      event.stopPropagation();
      document.body.style.position = "static";
      modal.style.display = "none";
    };

    if (event.target.matches(".details__image")) {
      showModal();
    } else if (event.target.matches(".preview-1")) {
      showModal();
    } else if (event.target.matches(".preview-2")) {
      showModal();
    } else if (event.target.matches(".preview-3")) {
      showModal();
    } else if (event.target.matches(".preview-4")) {
      showModal();
    } else if (
      !event.target.matches(".modal__content img") &&
      modal.style.display === "block"
    ) {
      hideModal();
    }
  }

  document.addEventListener("click", openModal);
}
