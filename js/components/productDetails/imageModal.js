export default function imageModal() {
  const modal = document.querySelector(".modal");
  const modalImage = document.querySelector(".modal__content img");

  function openModal(event) {

    const imageUrl = event.target.src;

    if (event.target.matches(".details__image")) {
      modal.style.display = "block";
      modalImage.src = imageUrl;
      document.body.style.position = "fixed";
    } else if (event.target.matches("#preview-1")) {
      modal.style.display = "block";
      modalImage.src = imageUrl;
      document.body.style.position = "fixed";
    } else if (event.target.matches("#preview-2")) {
      modal.style.display = "block";
      modalImage.src = imageUrl;
      document.body.style.position = "fixed";
    } else if (event.target.matches("#preview-3")) {
      modal.style.display = "block";
      modalImage.src = imageUrl;
      document.body.style.position = "fixed";
    } else if (event.target.matches("#preview-4")) {
      modal.style.display = "block";
      modalImage.src = imageUrl;
      document.body.style.position = "fixed";
    } else if (
      !event.target.matches(".modal__content img") &&
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
