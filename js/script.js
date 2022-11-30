//
// Burger menu
//

const burgerWrapper = document.querySelector(".burger-menu");
const burgerMenu = document.querySelector(".burger-menu-card");

burgerWrapper.addEventListener("click", () => {
  burgerWrapper.classList.toggle("open");
  burgerMenu.classList.toggle("show-burger-card");
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
