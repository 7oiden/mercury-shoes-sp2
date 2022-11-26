const hamburgerIcon = document.querySelector(".mobile-menu__toggle");
const mobileMenu = document.querySelector(".mobile-menu");

export function mobileMenuToggler() {
  if (mobileMenu.style.display === "none") {
    mobileMenu.style.display = "block";
  } else {
    mobileMenu.style.display = "none";
  }
}

hamburgerIcon.addEventListener("click", mobileMenuToggler);




