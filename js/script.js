//
// Burger menu
//

//create overlay
const overlay = document.createElement("div");
overlay.classList.add("overlay-bg");
document.querySelector("body").prepend(overlay);

export const showBurgerMenu = () => {
  const burgerWrapper = document.querySelector(".burger-menu");
  const burgerMenu = document.querySelector(".burger-menu-card");

  //const pageWrapper = document.querySelector(".page-wrapper");
  //console.log(document.querySelector("body"));

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
};

window.addEventListener("load", showBurgerMenu);

//
//  Carousel
//

const carousel = () => {
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
};

window.addEventListener("load", carousel);

//
// Testimonials popup when width <= 640px
//
const popup = document.querySelector(".testimonials-popup");
const reviews = document.querySelectorAll(".test-card-review");
const close = document.querySelector(".testimonials-popup-close");
console.log(close);
//console.log(popup);
//console.log(reviews);

const createPopup = (e) => {
  const clickedPopup = e.target;
  const parent = clickedPopup.parentNode;
  const card = parent.parentNode;
  const userName = card.querySelector(".user-name").innerHTML;
  const userImg = card.querySelector(".user-img").src;
  const userLoc = card.querySelector(".user-location").innerHTML;
  const userRev = card.querySelector(".user-review").innerHTML;
  //console.log(userImg);
  const createdCard = document.createElement("div");
  createdCard.classList.add("test-card-popup");
  const createdInner = document.createElement("div");
  createdInner.innerHTML = `
    <div class="col test-card-dsc">
      <div class="row flex">
        <div class="col">
          <img class="user-img" src="${userImg}" alt="user">
        </div>
        <div class="col test-name-loc">
            <div class="row">
                <p class="user-name">${userName}</p>
            </div>
            <div class="row">
                <p class="user-location small-paragraph">
                    ${userLoc}
                </p>
            </div>
        </div>
      </div>
      <div class="row test-card-review">
        <p class="user-review small-paragraph">
            ${userRev}
        </p>
      </div>
    </div>
  `;
  createdCard.appendChild(createdInner);
  popup.appendChild(createdCard);
  popup.classList.add("show-popup");
  overlay.classList.add("show-overlay");
};

function removePopup() {
  const hasElement = document.querySelectorAll(".test-card-popup");
  hasElement.forEach((elem) => {
    console.log("removing previous popup");
    elem.remove();
  });
}

function closePopup() {
  popup.classList.remove("show-popup");
  removePopup();
  overlay.classList.remove("show-overlay");
}

overlay.addEventListener("click", closePopup);

for (let rev of reviews) {
  rev.addEventListener("click", createPopup);
}

close.addEventListener("click", closePopup);

//review.addEventListener("click", createPopup);

//alert reminder
const setAlert = () => {
  const alerted = localStorage.getItem("alerted") || "";
  if (alerted != "yes") {
    alert("Hi. Please give me time till Friday to finish task. Thanks!");
    localStorage.setItem("alerted", "yes");
  }
};

window.addEventListener("load", setAlert);
