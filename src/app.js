const MAIN_TOGGLE = document.querySelector("#main-toggle");
let ISACTIVE = false;

const interruptor = () => {
  const TURN_ON = document.getElementById("switch-On");
  const TURN_OFF = document.getElementById("switch-Off");
  const BULB = document.getElementById("img-src");
  const ELEMENT = document.querySelector(".body");

  if (ISACTIVE) {
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

    const breakLightBulb = () => {
      BULB.src = "../assets/light-bulbBroken.jpg";
      ELEMENT.style.backgroundColor = "#fff";
      ELEMENT.style.color = "#000";
    };

    TURN_ON.addEventListener("click", switchOn);
    TURN_OFF.addEventListener("click", switchOff);
    BULB.addEventListener("dblclick", breakLightBulb);

    MAIN_TOGGLE.src = "../assets/on-main-toggle.png";
    ISACTIVE = false;
    document.getElementById("switch-On").disabled = false;
    document.getElementById("switch-Off").disabled = false;
  } else {
    document.getElementById("switch-On").disabled = true;
    document.getElementById("switch-Off").disabled = true;
    MAIN_TOGGLE.src = "../assets/off-main-toggle.png";
    MAIN_TOGGLE.addEventListener("click", interruptor);
    ISACTIVE = true;
  }
};

MAIN_TOGGLE.onclick(interruptor());
