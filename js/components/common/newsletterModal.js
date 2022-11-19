const newsletter = document.querySelector(".newsletter__modal");
const fadeBackground = document.querySelector(".fade-background");

export default function newsletterModal() {
  let closeCounter = 0;
  function closeNewsletterModal(event) {
    if (
      newsletter.style.display === "block" &&
      event.target.matches(".modal-icon")
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
        // document.body.style.overflow = "hidden";
        return;
      }
    });
  });

  newsletterObserver.observe(document.querySelector(".footer"));
}
