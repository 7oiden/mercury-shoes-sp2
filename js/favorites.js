import createNavLinks from "./components/common/createNavLinks.js";
import { basketCounter } from "./components/common/basketCounter.js";
import {
  mobileToggler,
  adminToggler,
} from "./components/common/dropdownTogglers.js";
import renderFavorites from "./ui/renderFavorites.js";
import { clearFavs } from "./components/basket/clearFavs.js";

createNavLinks();
basketCounter();
renderFavorites();
clearFavs();
