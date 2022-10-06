let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Thanks for dropping by, ${myName}!`;
  }
}

myButton.onclick = () => {
  setUserName();
};

/* https://pgmorales76.github.io/website_for_code_102/scripts/scripts.js */