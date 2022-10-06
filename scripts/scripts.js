document.querySelector("html").addEventListener("click", function () {
  alert("Ouch! Stop poking me!");
});

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "https://pgmorales76.github.io/website_for_code_102/images/firefox_logo_developer_edition.png") {
    myImage.setAttribute("src", "https://pgmorales76.github.io/website_for_code_102/images/firefox_logo_nightly.png");
  } else {
    myImage.setAttribute("src", "https://pgmorales76.github.io/website_for_code_102/images/firefox_logo_developer_edition.png");
  }
};

/* https://pgmorales76.github.io/website_for_code_102/scripts/scripts.js */