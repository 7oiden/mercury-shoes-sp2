const hamburgerIcon = document.querySelector(".mobile-menu__toggle");
const mobileMenu = document.querySelector(".mobile-menu");

function mobileToggler() {
  if (mobileMenu.style.display === "block") {
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "block";
  }
}

hamburgerIcon.addEventListener("click", mobileToggler);

const adminIcon = document.querySelector(".admin__icon");
const adminDropdown = document.querySelector(".admin__dropdown");

function adminToggler() {
  if (adminDropdown.style.display === "block") {
    adminDropdown.style.display = "none";
  } else {
    adminDropdown.style.display = "block";
  }
}

adminIcon.addEventListener("click", adminToggler);
