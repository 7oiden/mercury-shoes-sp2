import { clearLoginStorage } from "../../utils/storage.js";

export default function logoutIcon() {
  const adminLogoutIcon = document.querySelector("#logout");

  if (adminLogoutIcon) {
    adminLogoutIcon.onclick = function () {
      const performLogout = confirm("Are you sure you want to sign out?");

      if (performLogout) {
        clearLoginStorage();
        location.href = "/";
      }
    };
  }
}
