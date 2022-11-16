const newsletterButton = document.querySelector(".newsletter-button");
const newsletter = document.querySelector(".newsletter");
const fadeBackground = document.querySelector(".fade-background");
// const newsletter = document.querySelector(".newsletter");
// const navbar = document.querySelector(".navbar");

export default function newsletterModal() {
//   function openModal(event) {
//     event.stopPropagation();
//     if (newsletterContainer.style.display === "block") {
//       newsletterContainer.style.display = "none";
//       fadeBackground.style.display = "none";
//     } else {
//       newsletterContainer.style.display = "block";
//       fadeBackground.style.display = "block";
//     }
//   }

//   newsletterButton.addEventListener("click", openModal);

  function closeTicketDropdown(event) {
    if (
      newsletter.style.display === "block" &&
      event.target.matches(".modal-icon")
    ) {
      newsletter.style.display = "none";
      fadeBackground.style.display = "none";
    }
  }

  document.addEventListener("click", closeTicketDropdown);

  const newsletterObserver = new IntersectionObserver((entries) => {
    //   let iconContainer = document.querySelector(".scroll-top-container");
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          newsletter.style.display = "block";
          fadeBackground.style.display = "block";
          return;
        }
        newsletter.style.display = "none";
        fadeBackground.style.display = "none";
      });
    });
    
    newsletterObserver.observe(document.querySelector(".newsletter-trigger"));
}


