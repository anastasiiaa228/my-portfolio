document.addEventListener("DOMContentLoaded", function () {
  let currentPage = window.location.pathname.split("/").pop();

  if (currentPage === "" || currentPage === "/") {
    currentPage = "index.html";
  }

  currentPage = currentPage.split("?")[0].split("#")[0];

  const menuLinks = document.querySelectorAll("nav ul li a");

  menuLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
});