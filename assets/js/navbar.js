window.addEventListener("load", function () {
  const links = document.getElementsByClassName("nav__link");
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseenter", () => {
      document.getElementById(`link-r${i}`).classList.add("reference-active");
    });
    links[i].addEventListener("mouseleave", () => {
      document
        .getElementById(`link-r${i}`)
        .classList.remove("reference-active");
    });
  }
});
