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
    //About section
    const aboutHeader = document.querySelector("#about-header");
    if (isInViewport(aboutHeader)) {
      aboutHeader.classList.add("fadeInLeft");
    }

    const aboutText = document.querySelector("#about-text");
    if (isInViewport(aboutText)) {
      aboutText.classList.add("fadeInLeft");
    }

    const profileImage = document.querySelector(".profile-image");
    if (isInViewport(profileImage)) {
      profileImage.classList.add("fadeInRight");
    }

    //Education section
    const educationHeader = document.querySelector("#education-header");
    if (isInViewport(educationHeader)) {
      educationHeader.classList.add("fadeInRight");
    }

    const school1Header = document.querySelector("#schoolText1");
    if (isInViewport(school1Header)) {
      school1Header.classList.add("fadeInRight");
    }

    const school2Header = document.querySelector("#schoolText2");
    if (isInViewport(school2Header)) {
      school2Header.classList.add("fadeInRight");
    }

    const school3Header = document.querySelector("#schoolText3");
    if (isInViewport(school3Header)) {
      school3Header.classList.add("fadeInRight");
    }

    const wentworthImage = document.querySelector(".wentworth-image");
    if (isInViewport(wentworthImage)) {
      wentworthImage.classList.add("fadeInLeft");
    }

    //Experience section
    const experienceHeader = document.querySelector("#experience-header");
    if (isInViewport(experienceHeader)) {
      experienceHeader.classList.add("fadeInLeft");
    }

    const experience1Header = document.querySelector("#experienceText1");
    if (isInViewport(experience1Header)) {
      experience1Header.classList.add("fadeInLeft");
    }

    const experience2Header = document.querySelector("#experienceText2");
    if (isInViewport(experience2Header)) {
      experience2Header.classList.add("fadeInLeft");
    }

    const experience3Header = document.querySelector("#experienceText3");
    if (isInViewport(experience3Header)) {
      experience3Header.classList.add("fadeInLeft");
    }

    const dugganImage = document.querySelector(".duggan-image");
    if (isInViewport(dugganImage)) {
      dugganImage.classList.add("fadeInRight");
    }

    //Project section
    const projectHeader = document.querySelector("#project-header");
    if (isInViewport(projectHeader)) {
      projectHeader.classList.add("fadeInLeft");
    }

    const projectRow1 = document.querySelector("#projectRow1");
    if (isInViewport(projectRow1)) {
      projectRow1.classList.add("fadeInLeft");
    }

    const projectRow2 = document.querySelector("#projectRow2");
    if (isInViewport(projectRow2)) {
      projectRow2.classList.add("fadeInLeft");
    }
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
