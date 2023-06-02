var modal = document.getElementById("modalDiv");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");
var bodyId = document.getElementById("bodyId");
console.log(modal);
openBtn.onclick = function () {
  modal.style.display = "block";
  bodyId.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
};
closeBtn.onclick = function () {
  modal.style.display = "none";
  bodyId.style.backgroundColor = "rgb(255, 255, 255)";
};
window.onclick = function (event) {
  console.log(event.target)
  if (event.target == bodyId) {
    modal.style.display = "none";
    bodyId.style.backgroundColor = "rgb(255, 255, 255)";
  }
};
