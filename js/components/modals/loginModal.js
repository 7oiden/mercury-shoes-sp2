const adminLoginIcon = document.querySelector("#login");
const adminDropdown = document.querySelector(".admin__dropdown");
const fadeBackground = document.querySelector(".fade-background");

export function loginModal() {
  function openAdminDropdown() {
    if (adminDropdown.style.display === "block") {
      adminDropdown.style.display = "none";
      fadeBackground.style.display = "none";
    } else {
      adminDropdown.style.display = "block";
      adminDropdown.style.zIndex = "9999";
      fadeBackground.style.display = "block";
      fadeBackground.style.zIndex = "1";
    }
  }

  adminLoginIcon.addEventListener("click", openAdminDropdown);

  document.addEventListener("click", function (event) {
    const isClickInsideDropdown = adminDropdown.contains(event.target);

    if (
      !isClickInsideDropdown &&
      !event.target.matches("#login") &&
      !event.target.matches(".login") &&
      !event.target.matches(".nav__icon-label")
    ) {
      adminDropdown.style.display = "none";
      fadeBackground.style.display = "none";
    }
  });

  document.addEventListener("scroll", function () {
    if (window.pageYOffset > 450) {
      adminDropdown.style.display = "none";
      fadeBackground.style.display = "none";
    }
  });
}
