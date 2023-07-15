window.addEventListener("resize", ()=>{location.reload()})
let menu = document.getElementById("menu");
let submenu = document.getElementsByClassName("submenu");
let arrows = document.getElementsByClassName("arrow-right");
let submenuList = document.getElementsByName("submenuList");
let mainmenu = document.getElementById("mainmenu");
let mainMenuMobile = document.getElementById("m-main-menu");
let mainmenuToggle = true;
let menuToggle = true;
let toggleA = [false, false, false];
let x = window.matchMedia("(max-width: 480px)");
function mouseOverMenu() {
  menu.style.display = "block";
  document.getElementById("arrow-down").src = "images/arrow up.png";
  mainmenu.style.backgroundColor = "#175e4c";
}
function mouseOutMenu() {
  menu.style.display = "none";
  document.getElementById("arrow-down").src = "images/arrow down.png";
  mainmenu.style.backgroundColor = "#104d3d";
}
function displayMobilemenu() {
  document.getElementById("mainmenu").style.display = mainmenuToggle
    ? "block"
    : "none";
    document.getElementById("mobile-icon").src = mainmenuToggle
    ? "images/cross.png"
    : "images/mobile menu.png";  
  mainmenuToggle = !mainmenuToggle;
}
mainMenuMobile.onclick = function (e) {
  if (x.matches) {
    if (menu && !menu.contains(e.target)) {
      menu.style.display = menuToggle ? "block" : "none";
      mainmenu.style.backgroundColor = menuToggle ? "#175e4c" : "#104d3d";
      mainMenuMobile.style.backgroundColor = menuToggle ? "#175e4c" : "#104d3d";
      document.getElementById("arrow-down").src = menuToggle
        ? "images/arrow up.png"
        : "images/arrow down.png";
      console.log(menuToggle);
      menuToggle = !menuToggle;
    }
  }
};
function submenuClickedMobile(i, e) {
  if (submenu[i].contains(e.target)) {
    for (let j = 0; j < toggleA.length; j++) {
      if (i === j) toggleA[i] = !toggleA[i];
      else toggleA[j] = false;
    }
    for (let j = 0; j < toggleA.length; j++) {
      submenuList[j].style.display = toggleA[j] ? "block" : "none";
      arrows[j].src = toggleA[j]
        ? "images/arrow right.png"
        : "images/arrow left.png";
      submenu[j].style.backgroundColor = toggleA[j] ? "#2f8e76" : "#1d7a62";
      console.log(j + " " + toggleA[j]);
    }
  }
}
function submenuClicked(i) {
  submenuList[i].style.display = "block";
  arrows[i].src = "images/arrow left.png";
  submenu[i].style.backgroundColor = "#2f8e76";
}
function submenuReleased(i) {
  submenuList[i].style.display = "none";
  arrows[i].src = "images/arrow right.png";
  submenu[i].style.backgroundColor = "#1d7a62";
}
if (x.matches) {
  for (let i = 0; i < submenu.length; i++) {
    submenu[i].addEventListener("click", (e) => submenuClickedMobile(i, e));
    submenu[i].removeEventListener("click", (e) => submenuClickedMobile(i, e));
  }
} else if (!x.matches) {
  for (let i = 0; i < submenu.length; i++) {
    submenu[i].addEventListener("mouseover", () => submenuClicked(i));
    submenu[i].addEventListener("mouseout", () => submenuReleased(i));
  }
}
