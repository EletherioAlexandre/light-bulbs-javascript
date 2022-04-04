const TURN_ON = document.getElementById("switch-On");
const TURN_OFF = document.getElementById("switch-Off");
const BULB = document.getElementById("img-src");
const ELEMENT = document.querySelector(".body");
const SKY = document.getElementById("sky");

const switchOn = () => {
  BULB.src = "../assets/light-bulbOn.png";
  ELEMENT.style.backgroundColor = "#000";
  ELEMENT.style.color = "#fff";
};

const switchOff = () => {
  BULB.src = "../assets/light-bulbOff.png";

  ELEMENT.style.backgroundColor = "rgb(240 238 220)";
  ELEMENT.style.color = "#000";
};

TURN_ON.addEventListener("click", switchOn);
TURN_OFF.addEventListener("click", switchOff);
BULB.addEventListener("mouseover", switchOn);
BULB.addEventListener("mouseleave", switchOff);
