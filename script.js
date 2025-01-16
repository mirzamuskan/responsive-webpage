// Handle the collapsible menu
const toggleMenuButton = document.getElementById("toggle-menu");
const menuItems = document.getElementById("menu-items");

toggleMenuButton.addEventListener("click", () => {
  if (menuItems.style.display === "none" || menuItems.style.display === "") {
    menuItems.style.display = "block";
  } else {
    menuItems.style.display = "none";
  }
});

// Function to shrink the page based on screen width
function adjustPageScale() {
  const screenWidth = window.innerWidth;
  const body = document.body;

  if (screenWidth >= 992 && screenWidth <= 1600) {
    body.style.transform = "scale(0.9)";
    body.style.transformOrigin = "top left";
  } else if (screenWidth >= 700 && screenWidth <= 767) {
    body.style.transform = "scale(0.8)";
    body.style.transformOrigin = "top left";
  } else if (screenWidth >= 600 && screenWidth < 700) {
    body.style.transform = "scale(0.75)";
    body.style.transformOrigin = "top left";
  } else if (screenWidth <= 600) {
    body.style.transform = "scale(0.5)";
    body.style.transformOrigin = "top left";
  } else {
    body.style.transform = "scale(1)";
    body.style.transformOrigin = "top left";
  }
}

// Apply scaling on window load and resize
window.addEventListener("load", adjustPageScale);
window.addEventListener("resize", adjustPageScale);
