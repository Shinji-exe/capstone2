const listButton = document.getElementById("listButton");

const desktopNav = document.getElementById("desktopNav");

const closed = document.querySelector(".close");

listButton.addEventListener("click", function () {
  desktopNav.classList.add("mobileView");
});

closed.addEventListener("click", function () {
  desktopNav.classList.remove("mobileView");
});