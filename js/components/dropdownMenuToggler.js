const hamburgerIcon = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown");

hamburgerIcon.onclick = function () {

  if (dropdownMenu.style.display === "block") {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "block";
  }
};
