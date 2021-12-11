export default function descriptionToggler() {
  const plusIconSelector = document.querySelector("#plus-icon");
  const descriptionParagraph = document.querySelector(".details__text");

  plusIconSelector.addEventListener("click", paragraphToggler);

  function paragraphToggler() {
    if (descriptionParagraph.style.display === "block") {
      descriptionParagraph.style.display = "none";
    } else {
      descriptionParagraph.style.display = "block";
    }
  }

  //prevents text from getting lost when rezising window
  window.onresize = function () {
    if (window.innerWidth >= 992) {
      descriptionParagraph.style.display = "block";
    }
  };
}
