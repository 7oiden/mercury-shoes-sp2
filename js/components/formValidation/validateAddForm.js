import { checkLength, checkMaxLength, validateNumber } from "../../utils/validators.js";

const title = document.querySelector("#title");
const price = document.querySelector("#price");
const color = document.querySelector("#color");
const shortDescription = document.querySelector("#short-description");
const description = document.querySelector("#description");
const imageAltText = document.querySelector("#image-alt-text");

const titleError = document.querySelector("#add-title-error");
const priceError = document.querySelector("#add-price-error");
const colorError = document.querySelector("#add-color-error");
const shortDescriptionError = document.querySelector(
  "#add-short-description-error"
);
const shortDescriptionError2 = document.querySelector(
  "#add-short-description-error2"
);
const descriptionError = document.querySelector("#add-description-error");
const altTextError = document.querySelector("#add-alt-text-error");

export function validateAddForm() {

    function checkInput() {
      if (checkLength(title.value, 4)) {
        titleError.style.display = "none";
      } else {
        titleError.style.display = "block";
      }

      if (validateNumber(price.value)) {
        priceError.style.display = "none";
      } else {
        priceError.style.display = "block";
      }

      if (checkLength(color.value, 2)) {
        colorError.style.display = "none";
      } else {
        colorError.style.display = "block";
      }

      if (checkLength(shortDescription.value, 9)) {
        shortDescriptionError.style.display = "none";
      } else {
        shortDescriptionError.style.display = "block";
      }

      if (checkMaxLength(shortDescription.value, 131)) {
        shortDescriptionError2.style.display = "none";
      } else {
        shortDescriptionError2.style.display = "block";
      }

      if (checkLength(description.value, 14)) {
        descriptionError.style.display = "none";
      } else {
        descriptionError.style.display = "block";
      }

      if (checkLength(imageAltText.value, 9)) {
        altTextError.style.display = "none";
      } else {
        altTextError.style.display = "block";
      }
    }

    title.addEventListener("keyup", checkInput);
    price.addEventListener("keyup", checkInput);
    color.addEventListener("keyup", checkInput);
    shortDescription.addEventListener("keyup", checkInput);
    description.addEventListener("keyup", checkInput);
    imageAltText.addEventListener("keyup", checkInput);

    title.onfocus = function () {
      title.style.border = "1px solid #bdbdbd";
    };

    price.onfocus = function () {
      price.style.border = "1px solid #bdbdbd";
    };

    color.onfocus = function () {
      color.style.border = "1px solid #bdbdbd";
    };

    shortDescription.onfocus = function () {
      shortDescription.style.border = "1px solid #bdbdbd";
    };

    description.onfocus = function () {
      description.style.border = "1px solid #bdbdbd";
    };

    imageAltText.onfocus = function () {
      imageAltText.style.border = "1px solid #bdbdbd";
    };

    if (checkLength(title.value, 4)) {
      titleError.style.display = "none";
      title.style.border = "1px solid #bdbdbd";
    } else {
      titleError.style.display = "block";
      title.style.border = "2px solid #ed553b";
    }

    if (validateNumber(price.value)) {
      priceError.style.display = "none";
      price.style.border = "1px solid #bdbdbd";
    } else {
      priceError.style.display = "block";
      price.style.border = "2px solid #ed553b";
    }

    if (checkLength(color.value, 2)) {
      colorError.style.display = "none";
      color.style.border = "1px solid #bdbdbd";
    } else {
      colorError.style.display = "block";
      color.style.border = "2px solid #ed553b";
    }

    if (checkLength(shortDescription.value, 9)) {
      shortDescriptionError.style.display = "none";
      shortDescription.style.border = "1px solid #bdbdbd";
    } else {
      shortDescriptionError.style.display = "block";
      shortDescription.style.border = "2px solid #ed553b";
    }

    if (checkMaxLength(shortDescription.value, 131)) {
      shortDescriptionError2.style.display = "none";
      shortDescription.style.border = "1px solid #bdbdbd";
    } else {
      shortDescriptionError2.style.display = "block";
      shortDescription.style.border = "2px solid #ed553b";
    }

    if (checkLength(description.value, 15)) {
      descriptionError.style.display = "none";
      description.style.border = "1px solid #bdbdbd";
    } else {
      descriptionError.style.display = "block";
      description.style.border = "2px solid #ed553b";
    }

    if (checkLength(imageAltText.value, 9)) {
      altTextError.style.display = "none";
      imageAltText.style.border = "1px solid #bdbdbd";
    } else {
      altTextError.style.display = "block";
      imageAltText.style.border = "2px solid #ed553b";
    }
}
