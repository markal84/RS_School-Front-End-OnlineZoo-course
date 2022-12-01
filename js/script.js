//
// Burger menu
//

const burgerWrapper = document.querySelector(".burger-menu");
const burgerMenu = document.querySelector(".burger-menu-card");

//create overlay
//const pageWrapper = document.querySelector(".page-wrapper");
const overlay = document.createElement("div");
overlay.classList.add("overlay-bg");
document.querySelector("body").prepend(overlay);
console.log(document.querySelector("body"));

burgerWrapper.addEventListener("click", () => {
  burgerWrapper.classList.toggle("open");
  burgerMenu.classList.toggle("show-burger-card");
  overlay.classList.toggle("show-overlay");
});

overlay.addEventListener("click", () => {
  burgerWrapper.classList.remove("open");
  burgerMenu.classList.remove("show-burger-card");
  overlay.classList.remove("show-overlay");
});

//
//  Carousel
//

const gap = 30;

const carousel = document.querySelector("#carousel");
const content = document.querySelector("#content");
const nextButton = document.querySelector("#next");
const prevButon = document.querySelector("#prev");

let width = carousel.offsetWidth;
let widthContent = content.offsetWidth;
window.addEventListener("resize", (e) => (width = carousel.offsetWidth));

nextButton.addEventListener("click", (e) => {
  //console.log(widthContent + gap);
  carousel.scrollBy(widthContent + gap, 0);
});

prevButon.addEventListener("click", (e) => {
  carousel.scrollBy(-(widthContent + gap), 0);
});
