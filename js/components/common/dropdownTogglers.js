const hamburgerIcon = document.querySelector(".mobile-menu__toggle");
const mobileMenu = document.querySelector(".mobile-menu");

export function mobileToggler() {
  if (mobileMenu.style.display === "none") {
    mobileMenu.style.display = "block";
  } else {
    mobileMenu.style.display = "none";
  }
}

hamburgerIcon.addEventListener("click", mobileToggler);

const adminLoginIcon = document.querySelector(".login");
const adminDropdown = document.querySelector(".admin__dropdown");

export function adminToggler() {
  function openAdminDropdown() {
    if (adminDropdown.style.display === "block") {
      adminDropdown.style.display = "none";
    } else {
      adminDropdown.style.display = "block";
      adminDropdown.style.zIndex = "9999";
    }
  }

  adminLoginIcon.addEventListener("click", openAdminDropdown);

  document.addEventListener("click", function (event) {
    const isClickInsideDropdown = adminDropdown.contains(event.target);

    if (!isClickInsideDropdown && !event.target.matches(".login")) {
      adminDropdown.style.display = "none";
    }
  });
}
