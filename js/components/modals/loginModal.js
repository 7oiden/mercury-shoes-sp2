const adminLoginIcon = document.querySelector(".login");
const adminDropdown = document.querySelector(".admin__dropdown");

export function loginModal() {
    function openAdminDropdown() {
      if (adminDropdown.style.display === "block") {
        adminDropdown.style.display = "none";
      } else {
        adminDropdown.style.display = "block";
        adminDropdown.style.zIndex = "9999";
      }
    }
  
    adminLoginIcon.addEventListener("click", openAdminDropdown);
  
    document.addEventListener("click", function (event) {
      const isClickInsideDropdown = adminDropdown.contains(event.target);
  
      if (!isClickInsideDropdown && !event.target.matches(".login")) {
        adminDropdown.style.display = "none";
      }
    });
  }