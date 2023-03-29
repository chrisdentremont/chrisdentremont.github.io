window.addEventListener("scroll", (e) => {
  const nav = document.querySelector(".navbar");
  if (window.pageYOffset > 200) {
    nav.classList.add("shadow");
  } else {
    nav.classList.remove("shadow");
  }

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

  //Experience section
  const experienceHeader = document.querySelector("#experience-header");
  if (isInViewport(experienceHeader)) {
    experienceHeader.classList.add("fadeInRight");
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
});

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
