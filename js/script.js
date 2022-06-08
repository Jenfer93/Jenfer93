const contactButton = document.querySelector("#contact");
const aboutButton = document.querySelector("#about");
const aboutMe = document.querySelector(".about");
const contactMe = document.querySelector(".contact");
//The code to show the About and Contact me windows

function showAbout() {
  aboutMe.classList.add("open");
}

function closeAbout() {
  aboutMe.classList.remove("open");
}

function showContact() {
  contactMe.classList.add("open");
}

function closeContact() {
  contactMe.classList.remove("open");
}

showAbout();
showContact();
closeAbout();
closeContact();

//https://medium.com/allenhwkim/close-div-when-clicking-outside-it-97255c20a221