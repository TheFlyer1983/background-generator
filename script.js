var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

function setGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value +")";
  css.textContent = body.style.background + ";";
}

function randomGradient(event) {
  color1.value = '#' + randomNumber();
  color2.value = '#' + randomNumber();
  setGradient();
}

function randomNumber() {
  var newColor = (Math.random()*0xFFFFFF << 0).toString(16);
  return newColor;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
window.addEventListener("load", setGradient);
random.addEventListener("click", randomGradient);
