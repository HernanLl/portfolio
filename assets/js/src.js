window.addEventListener("load", function () {
  const btnON = document.getElementById("on");
  const btnOFF = document.getElementById("off");
  const svgContainer = document.getElementById("light");
  const ideaContainer = document.getElementById("ly-idea");
  const ideaLantern = document.getElementById("idea-lantern");
  const logoContainer = document.getElementById("logo");
  const btnContacto = document.getElementById("contacto");
  const TIME_ANIMATION = 1;

  //navbar animation
  let isCollapse = false;
  const btnCollapse = document.getElementById("btnCollapse");
  const nav = document.getElementById("r-nav");
  btnCollapse.addEventListener("click", () => {
    if (isCollapse) {
      btnCollapse.classList.remove("is-active");
      isCollapse = !isCollapse;
      nav.classList.remove("r-nav--active");
    } else {
      btnCollapse.classList.add("is-active");
      isCollapse = !isCollapse;
      nav.classList.add("r-nav--active");
    }
  });

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
    ideaContainer.style.background = "#fff757";
    logoContainer.style.border = "1px solid #fff757";
  }, TIME_ANIMATION * 1000);

  //buttons click event
  btnON.addEventListener("click", () => {
    btnON.style.background = "black";
    btnON.style.color = "white";
    btnOFF.style.background = "white";
    btnOFF.style.color = "black";
    svgContainer.innerHTML = SVGON;
    ideaContainer.style.background = "#fff757";
    logoContainer.style.border = "1px solid #fff757";
  });
  btnOFF.addEventListener("click", () => {
    btnON.style.background = "white";
    btnON.style.color = "black";
    btnOFF.style.background = "black";
    btnOFF.style.color = "white";
    svgContainer.innerHTML = SVGOFF;
    ideaContainer.style.background = "white";
    logoContainer.style.border = "1px solid white";
  });
});
