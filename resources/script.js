const root = document.querySelector(":root");

const variables = [
  "--textColor1",
  "--textColor2",
  "--textHoverColor",
  "--highlightColor",
  "--highlightHoverColor",
  "--cardColor",
  "--backgroundColor",
  "--backgroundColorDark",
];
const colorSets = [
  [
    "#35af9f",
    "#c2dfe3",
    "#e0fbfc",
    "#3a928e",
    "#2c7773",
    "#082944",
    "#062136",
    "#051c2e",
  ],
  [
    "#E3D888",
    "#E3D888",
    "#c3b75d",
    "#E3D888",
    "#5b5634",
    "#3f2d27",
    "#31231E",
    "#201713",
  ],
  [
    "#AAAE7F",
    "#D0D6B3",
    "#E3D888",
    "#AAAE7F",
    "#484d10",
    "#1a3e0f",
    "#16330c",
    "#12290a",
  ],
];

let currentColor = 0;
setColor(false);

function setColor(increment) {
  if (increment) {
    if (currentColor == 2) {
      currentColor = 0;
    } else {
      currentColor++;
    }
  }

  for (let i = 0; i < variables.length; i++) {
    root.style.setProperty(variables[i], colorSets[currentColor][i]);
  }
}

window.addEventListener(
  "scroll",
  (e) => {
    const fadeInLefts = document.querySelectorAll(".fade-in-left");

    fadeInLefts.forEach((e) => {
      if (isInViewport(e)) {
        e.classList.add("fadeInLeft");
      }
    });

    const fadeInRights = document.querySelectorAll(".fade-in-right");

    fadeInRights.forEach((e) => {
      if (isInViewport(e)) {
        e.classList.add("fadeInRight");
      }
    });
  },
  true
);

function isInViewport(element) {
  if (element != null) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  } else {
    return false;
  }
}
