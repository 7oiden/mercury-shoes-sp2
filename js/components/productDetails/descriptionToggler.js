export default function descriptionToggler() {
  const showIcon = document.querySelector(".show-icon");
  const description = document.querySelector(".details__text");

  showIcon.addEventListener("click", handleShowClick);

  function handleShowClick(event) {
    event.stopPropagation();
    this.classList.toggle("fa-plus");
    this.classList.toggle("fa-minus");
    description.classList.toggle("text-show");
    description.classList.toggle("text-hide");

    if (this.classList.contains("fa-plus")) {
      this.setAttribute("title", "Show info");
    } else if (this.classList.contains("fa-minus")) {
      this.setAttribute("title", "Hide info");
    }
  }

  if (window.innerWidth >= 992) {
    showIcon.classList.remove("fa-plus");
    showIcon.classList.add("fa-minus");
    showIcon.setAttribute("title", "Hide info");
    description.classList.add("text-show");
    description.classList.remove("text-hide");
  } else if (window.innerWidth < 992) {
    description.classList.remove("text-show");
    description.classList.add("text-hide");
    showIcon.setAttribute("title", "Show info");
    showIcon.classList.add("fa-plus");
    showIcon.classList.remove("fa-minus");
  }

  // window.onresize = function () {
  //   if (window.innerWidth >= 992) {
  //     showIcon.classList.remove("fa-plus");
  //     showIcon.classList.add("fa-minus");
  //     description.classList.add("text-show");
  //     description.classList.remove("text-hide");
  //   } else if (window.innerWidth < 992) {
  //     description.classList.remove("text-show");
  //     description.classList.add("text-hide");
  //     showIcon.classList.add("fa-plus");
  //     showIcon.classList.remove("fa-minus");
  //   }
  // };
}
