export default function featSlider() {
  const slider = document.querySelector(".slider");
  const leftArrow = document.querySelector("#left");
  const rightArrow = document.querySelector("#right");
  const indicatorParents = document.querySelector(".indicator-container");

  let sectionIndex = 0;

  document.querySelectorAll(".indicator").forEach(function (indicator, index) {
    indicator.addEventListener("click", function () {
      sectionIndex = index;
      document.querySelector(".selected").classList.remove("selected");
      indicator.classList.add("selected");
      slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
    });
  });

  leftArrow.addEventListener("click", function () {
    sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
    document.querySelector(".selected").classList.remove("selected");
    indicatorParents.children[sectionIndex].classList.add("selected");
    slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
  });

  rightArrow.addEventListener("click", function () {
    if (window.innerWidth < 768) {
      sectionIndex = sectionIndex < 3 ? sectionIndex + 1 : 3;
    } else {
      sectionIndex = sectionIndex < 2 ? sectionIndex + 1 : 2;
    }
    document.querySelector(".selected").classList.remove("selected");
    indicatorParents.children[sectionIndex].classList.add("selected");
    slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
  });
}
