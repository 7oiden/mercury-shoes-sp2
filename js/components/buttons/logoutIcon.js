import { clearLoginStorage } from "../../utils/storage.js";

export default function logoutIcon() {
  const adminLogoutIcon = document.querySelector("#logout");

  const banner = document.querySelector(".banner")

  if (adminLogoutIcon) {
    adminLogoutIcon.onclick = function () {
      const performLogout = confirm("Are you sure you want to sign out?");

      if (performLogout) {
        clearLoginStorage();
        banner.classList.remove("banner-admin")
        location.href = "/";
      }
    };
  }
}
