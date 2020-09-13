let isOpen = false;
const RADIUS_SPHERE = 175;

function renderSkill(skill) {
  if (!isOpen) {
    document.getElementById("card").style.display = "flex";
    document.getElementById("card").style.animation = "side-in-right .5s";
    isOpen = true;
  }
  let nameSkill = "";
  let logoSkill = "/portfolio/assets/skills/";
  switch (skill) {
    case "css":
      nameSkill = "CSS3";
      logoSkill += "css.png";
      break;
    case "html":
      nameSkill = "HTML5";
      logoSkill += "html.jpg";
      break;
    case "git":
      nameSkill = "GIT";
      logoSkill += "git.png";
      break;
    case "js":
      nameSkill = "Javascript";
      logoSkill += "js.png";
      break;
    case "react":
      nameSkill = "Reactjs";
      logoSkill += "react.svg";
      break;
    case "spring":
      nameSkill = "Spring";
      logoSkill += "spring.png";
      break;
    case "java":
      nameSkill = "Java";
      logoSkill += "java.png";
      break;
    case "sass":
      nameSkill = "Sass";
      logoSkill += "sass.png";
      break;
    case "node":
      nameSkill = "Nodejs";
      logoSkill += "node.png";
      break;
    case "webpack":
      nameSkill = "Webpack";
      logoSkill += "webpack.png";
      break;
  }
  document.getElementById("name-info").innerHTML = nameSkill;
  document.getElementById("img-info").src = logoSkill;
}

window.addEventListener("load", function () {
  //skills click events
  const SPHERES = 10;
  for (let i = 0; i < SPHERES; i++) {
    const skill = document.getElementById("sphere-" + i);
    skill.addEventListener("click", () => {
      const name = skill.getAttribute("data-value");
      renderSkill(name);
    });
  }

  //animation skills
  firstRender = true;
  const DIFF = 360 / SPHERES;
  let deg = 0;
  setInterval(() => {
    for (let i = 0; i < SPHERES; i++) {
      let hex = ((deg + i * DIFF) * Math.PI) / 2 / 90;
      const sphere = document.getElementById("sphere-" + i);
      if (sphere) {
        sphere.style.top = RADIUS_SPHERE * Math.sin(hex) - 37.5;
        sphere.style.left = RADIUS_SPHERE * Math.cos(hex) - 37.5;
        deg += 0.01;
        if (firstRender) {
          sphere.classList.remove("d-none");
        }
      }
    }
    firstRender = false;
  }, 5);
});
