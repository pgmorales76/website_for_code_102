document.querySelector("html").addEventListener("click", function () {
    alert("Watch the image change!");
  });

  const myImage = document.querySelector("img");

  myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "/Users/peterg.morales/Documents/code_fellows/projects/courses/102/website_for_code_102/website_for_code_102/images/firefox_logo_developer_edition.png") {
      myImage.setAttribute("src", "/Users/peterg.morales/Documents/code_fellows/projects/courses/102/website_for_code_102/website_for_code_102/images/firefox_logo_nightly.png");
    } else {
      myImage.setAttribute("src", "/Users/peterg.morales/Documents/code_fellows/projects/courses/102/website_for_code_102/website_for_code_102/images/firefox_logo_developer_edition.png");
    }
  };

/* https://pgmorales76.github.io/website_for_code_102/scripts/scripts.js */