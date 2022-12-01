import { getToken } from "../../utils/storage.js";
//keep
import { validateNewsletterForm } from ".././formValidation/validateNewsletterForm.js";

const newsletter = document.querySelector(".newsletter__modal");
const fadeBackground = document.querySelector(".fade-background-nl");

export default function newsletterModal() {
  let closeCounter = 0;

  function closeNewsletterModal(event) {
    if (
      newsletter.style.display === "block" &&
      event.target.matches(".modal__close-icon")
    ) {
      newsletter.style.display = "none";
      fadeBackground.style.display = "none";
      document.body.style.overflow = "visible";
      closeCounter += 1;
    }
  }

  document.addEventListener("click", closeNewsletterModal);

  const newsletterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && closeCounter === 0) {
        newsletter.style.display = "block";
        fadeBackground.style.display = "block";
        return;
      }
    });
  });

  // prevents triggering modal when logged in as admin
  const token = getToken();

  if (!token) {
    newsletterObserver.observe(document.querySelector(".footer"));
  }
}
