window.addEventListener("load", function () {
  const btnON = document.getElementById("on");
  const btnOFF = document.getElementById("off");
  const svgContainer = document.getElementById("light");
  const ideaContainer = document.getElementById("ly-idea");
  const ideaLantern = document.getElementById("idea-lantern");
  const btnContacto = document.getElementById("contact");
  const TIME_ANIMATION = 1;

  //contact button animation
  btnContacto.addEventListener("mouseover", () => {
    btnContacto.style.animation = "btn-active 1s";
    btnContacto.style.animationFillMode = "forwards";
  });
  btnContacto.addEventListener("mouseleave", () => {
    btnContacto.style.animation = "none";
  });

  //lantern animation
  ideaLantern.style.animation = `side-in ${TIME_ANIMATION}s`;
  ideaLantern.classList.remove("d-none");
  setTimeout(() => {
    btnON.style.background = "black";
    btnON.style.color = "white";
    btnOFF.style.background = "white";
    btnOFF.style.color = "black";
    svgContainer.innerHTML = SVGON;
    ideaContainer.classList.add("ly-idea--active");
  }, TIME_ANIMATION * 1000);

  //buttons click event
  btnON.addEventListener("click", () => {
    btnON.style.background = "black";
    btnON.style.color = "white";
    btnOFF.style.background = "white";
    btnOFF.style.color = "black";
    svgContainer.innerHTML = SVGON;
    ideaContainer.classList.add("ly-idea--active");
  });
  btnOFF.addEventListener("click", () => {
    btnON.style.background = "white";
    btnON.style.color = "black";
    btnOFF.style.background = "black";
    btnOFF.style.color = "white";
    svgContainer.innerHTML = SVGOFF;
    ideaContainer.classList.remove("ly-idea--active");
  });
});
