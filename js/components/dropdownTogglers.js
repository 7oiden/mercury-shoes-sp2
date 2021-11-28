const hamburgerIcon = document.querySelector(".mobile-menu__toggle");
const mobileMenu = document.querySelector(".mobile-menu");

export function mobileToggler() {
  if (mobileMenu.style.display === "block") {
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "block";
  }
}

hamburgerIcon.addEventListener("click", mobileToggler);

const adminLoginIcon = document.querySelector("#login");
const adminDropdown = document.querySelector(".admin__dropdown");

export function adminToggler() {
  if (adminDropdown.style.display === "block") {
    adminDropdown.style.display = "none";
  } else {
    adminDropdown.style.display = "block";
  }
}

adminLoginIcon.addEventListener("click", adminToggler);
